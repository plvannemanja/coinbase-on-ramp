import { BuyOptionsRequest } from '@/app/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRequest, fetchOnrampRequest } from './helpers';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = JSON.parse(req.body);
  const body: BuyOptionsRequest = {
    country: reqBody.country,
    subdivision: reqBody.subdivision,
  };
  const request_method = 'GET';

  const { url: baseUrl, jwt } = await createRequest({
    request_method,
    request_path: '/onramp/v1/buy/options',
  });
  const url = `${baseUrl}?country=${body.country}&subdivision=${body.subdivision}`;

  await fetchOnrampRequest({
    request_method,
    url,
    jwt,
    res,
  });
}

export default handler;
