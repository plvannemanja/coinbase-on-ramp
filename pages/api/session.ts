import { NextApiRequest, NextApiResponse } from 'next';
import { generateNonce, SiweMessage } from 'siwe';
import { sealData } from 'iron-session';
import { authCookieName, ironOptions } from './middleware'; // Import from your middleware file
import { SessionRequest } from '@/app/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const requestBody: SessionRequest = JSON.parse(req.body);
    const { message, signature } = requestBody;

    const siweMessage = new SiweMessage(message);

    // Verify the signature
    const fields = await siweMessage.verify({ signature });

    // Seal the new session data
    const sealed = await sealData(
      {
        siwe: fields.data,
        nonce: generateNonce(),
      },
      ironOptions
    );

    //Set the session cookie
    res.setHeader(
      'Set-Cookie',
      `${authCookieName}=${sealed}; Path=/; HttpOnly; SameSite=Strict; Max-Age=900${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
    );

    // Return success response
    return res.status(200).json({ ok: true, address: fields.data.address });
  } catch (e) {
    console.error('Error in SIWE verification:', e);
    return res.status(400).json({ ok: false, message: (e as Error).message });
  }
}
