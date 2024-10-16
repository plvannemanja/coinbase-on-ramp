import { NextApiRequest, NextApiResponse } from 'next';
import { createRequest, fetchOnrampRequest } from '../helpers';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { partner_user_id } = req.query;
  const { page_key, page_size } = req.query;

  if (!partner_user_id || typeof partner_user_id !== 'string') {
    return res.status(400).json({ message: 'Invalid partner_user_id' });
  }

  const request_method = 'GET';
  let request_path = `/onramp/v1/buy/user/${partner_user_id}/transactions`;

  if (
    page_key &&
    page_key != undefined &&
    page_size &&
    page_size != undefined
  ) {
    request_path += `?page_key=${page_key}&page_size=${page_size}`;
  } else if (page_key && page_key != undefined) {
    request_path += `?page_key=${page_key}`;
  } else if (page_size && page_size != undefined) {
    request_path += `?page_size=${page_size}`;
  }

  const { url, jwt } = await createRequest({
    request_method,
    request_path,
  });

  await fetchOnrampRequest({
    request_method,
    url,
    jwt,
    res,
  });
}

export default handler;
