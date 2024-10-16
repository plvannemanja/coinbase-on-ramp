import { NextApiRequest, NextApiResponse } from 'next';
import { SiweMessage } from 'siwe';
import { SessionOptions, unsealData } from 'iron-session';

export const authCookieName = 'coinbase-ramp-demo-app-auth';

export const ironOptions: SessionOptions = {
  password: process.env.IRON_PASSWORD!, // Make sure to set this in your .env file
  cookieName: authCookieName,
  cookieOptions: {
    ttl: 60 * 60, // 1 hour
    maxAge: 60 * 60, // 1 hour
    secure: process.env.NODE_ENV === 'production',
  },
};

export function withAuth(
  handler: (
    req: NextApiRequest,
    res: NextApiResponse,
    userId?: string
  ) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const sealedData = req.cookies[authCookieName];

      let session: { siwe?: SiweMessage; nonce?: string } = {};

      if (sealedData) {
        session = await unsealData(sealedData, ironOptions);
      }

      if (session.siwe && session.nonce) {
        // Session is already verified
        return handler(req, res, session.siwe.address);
      }

      // Session has expired or doesn't exist
      return res.status(401).json({ message: 'Session expired' });
    } catch (e) {
      return res.status(500).json({ message: (e as Error).message });
    }
  };
}
