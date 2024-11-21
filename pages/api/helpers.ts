import { SignOptions, sign } from 'jsonwebtoken';
import { NextApiResponse } from 'next';

export type createRequestParams = {
  request_method: 'GET' | 'POST';
  request_path: string;
};

const { CDP_API_KEY_PRIVATE_KEY, CDP_API_KEY_NAME } = process.env;

if (!CDP_API_KEY_NAME && !CDP_API_KEY_PRIVATE_KEY) {
  process.exit();
}

const key_name = CDP_API_KEY_NAME!;
const key_secret = CDP_API_KEY_PRIVATE_KEY?.replace(/\\n/g, '\n')!;

export async function createRequest({
  request_method,
  request_path,
}: createRequestParams) {
  const host = 'api.developer.coinbase.com';

  const url = `https://${host}${request_path}`;
  const uri = `${request_method} ${host}${request_path}`;

  const payload = {
    iss: 'coinbase-cloud',
    nbf: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 120,
    sub: key_name,
    uri,
  };

  const signOptions: SignOptions = {
    algorithm: 'ES256',
    header: {
      alg: 'ES256',
      kid: key_name,
      // nonce: crypto.randomBytes(16).toString('hex'), // non-standard, coinbase-specific header that is necessary
    },
  };

  const jwt = await sign(payload, key_secret, signOptions);
  console.log(jwt)
  return { url, jwt };
}

type fetchOnrampRequestParams = {
  request_method: 'GET' | 'POST';
  url: string;
  jwt: string;
  body?: string;
  res: NextApiResponse;
};

type ErrorCause = {
  status: number;
  statusText: string;
  body: object;
};

export async function fetchOnrampRequest({
  request_method,
  url,
  jwt,
  body,
  res,
}: fetchOnrampRequestParams) {
  await fetch(url, {
    method: request_method,
    body: body,
    headers: { Authorization: 'Bearer ' + jwt },
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorText = await response.text();
        throw Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`,
          {
            cause: {
              status: response.status,
              statusText: response.statusText,
              body: JSON.parse(errorText),
            },
          }
        );
      }
      return response.json();
    })
    .then((json) => {
      res.status(200).json(json);
    })
    .catch((error) => {
      console.error('Caught error: ', error);

      if (error instanceof Error) {
        const { status, body } = error.cause as ErrorCause;
        res.status(status).send(body);
      }
    });
}
