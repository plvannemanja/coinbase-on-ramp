import type { NextApiRequest, NextApiResponse } from 'next';
const { CDP_API_KEY_PRIVATE_KEY, CDP_API_KEY_NAME } = process.env;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    private_key: CDP_API_KEY_PRIVATE_KEY,
    key_name: CDP_API_KEY_NAME
  })
}

export default handler;
