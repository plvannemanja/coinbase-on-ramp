import type { NextApiRequest, NextApiResponse } from 'next';
async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: "success"
  })
}

export default handler;
