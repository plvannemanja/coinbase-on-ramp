import type { NextApiRequest, NextApiResponse } from 'next';
import { createRequest, fetchOnrampRequest } from './helpers';
import { SellQuoteRequest } from '@/app/types';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const request_method = 'POST';
  const { url, jwt } = await createRequest({
    request_method,
    request_path: '/onramp/v1/sell/quote',
  });

  const reqBody = JSON.parse(req.body);
  const body: SellQuoteRequest = {
    sell_currency: reqBody.sell_currency,
    sell_network: reqBody.sell_network,
    sell_amount: reqBody.sell_amount,
    cashout_currency: reqBody.cashout_currency,
    payment_method: reqBody.payment_method,
    country: reqBody.country,
    // subdivision: reqBody.subdivision,
  };

  await fetchOnrampRequest({
    request_method,
    url,
    jwt,
    body: JSON.stringify(body),
    res,
  });
}

export default handler;
