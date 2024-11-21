import { BuyOptionsRequest } from '@/app/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRequest, fetchOnrampRequest } from './helpers';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = JSON.parse(req.body);
  const body: BuyOptionsRequest = {
    country: reqBody.country,
    subdivision: reqBody.subdivision,
  };
  res.status(200).json({
    "payment_currencies": [
      {
        "id": "AED",
        "limits": [
          {
            "id": "CARD",
            "min": "8",
            "max": "27000"
          }
        ]
      },
      {
        "id": "ARS",
        "limits": [
          {
            "id": "CARD",
            "min": "2100",
            "max": "7500000"
          }
        ]
      },
      {
        "id": "AUD",
        "limits": [
          {
            "id": "CARD",
            "min": "4",
            "max": "11000"
          }
        ]
      },
      {
        "id": "AZN",
        "limits": [
          {
            "id": "CARD",
            "min": "4",
            "max": "12000"
          }
        ]
      },
      {
        "id": "BGN",
        "limits": [
          {
            "id": "CARD",
            "min": "4",
            "max": "13000"
          }
        ]
      },
      {
        "id": "BOB",
        "limits": [
          {
            "id": "CARD",
            "min": "14",
            "max": "51000"
          }
        ]
      },
      {
        "id": "BRL",
        "limits": [
          {
            "id": "CARD",
            "min": "12",
            "max": "43000"
          }
        ]
      },
      {
        "id": "CAD",
        "limits": [
          {
            "id": "CARD",
            "min": "3",
            "max": "10000"
          }
        ]
      },
      {
        "id": "CHF",
        "limits": [
          {
            "id": "CARD",
            "min": "2",
            "max": "6600"
          }
        ]
      },
      {
        "id": "CLP",
        "limits": [
          {
            "id": "CARD",
            "min": "2000",
            "max": "7300000"
          }
        ]
      },
      {
        "id": "COP",
        "limits": [
          {
            "id": "CARD",
            "min": "8900",
            "max": "33000000"
          }
        ]
      },
      {
        "id": "CRC",
        "limits": [
          {
            "id": "CARD",
            "min": "1100",
            "max": "3800000"
          }
        ]
      },
      {
        "id": "CZK",
        "limits": [
          {
            "id": "CARD",
            "min": "49",
            "max": "180000"
          }
        ]
      },
      {
        "id": "DKK",
        "limits": [
          {
            "id": "CARD",
            "min": "15",
            "max": "53000"
          }
        ]
      },
      {
        "id": "DOP",
        "limits": [
          {
            "id": "CARD",
            "min": "130",
            "max": "450000"
          }
        ]
      },
      {
        "id": "EUR",
        "limits": [
          {
            "id": "CARD",
            "min": "2",
            "max": "7100"
          }
        ]
      },
      {
        "id": "GBP",
        "limits": [
          {
            "id": "CARD",
            "min": "2",
            "max": "5900"
          }
        ]
      },
      {
        "id": "GHS",
        "limits": [
          {
            "id": "CARD",
            "min": "32",
            "max": "110000"
          }
        ]
      },
      {
        "id": "GTQ",
        "limits": [
          {
            "id": "CARD",
            "min": "16",
            "max": "57000"
          }
        ]
      },
      {
        "id": "HKD",
        "limits": [
          {
            "id": "CARD",
            "min": "16",
            "max": "58000"
          }
        ]
      },
      {
        "id": "HRK",
        "limits": [
          {
            "id": "CARD",
            "min": "15",
            "max": "53000"
          }
        ]
      },
      {
        "id": "HUF",
        "limits": [
          {
            "id": "CARD",
            "min": "780",
            "max": "2900000"
          }
        ]
      },
      {
        "id": "IDR",
        "limits": [
          {
            "id": "CARD",
            "min": "32000",
            "max": "110000000"
          }
        ]
      },
      {
        "id": "INR",
        "limits": [
          {
            "id": "CARD",
            "min": "170",
            "max": "630000"
          }
        ]
      },
      {
        "id": "ISK",
        "limits": [
          {
            "id": "CARD",
            "min": "280",
            "max": "1000000"
          }
        ]
      },
      {
        "id": "JMD",
        "limits": [
          {
            "id": "CARD",
            "min": "320",
            "max": "1100000"
          }
        ]
      },
      {
        "id": "JOD",
        "limits": [
          {
            "id": "CARD",
            "min": "2",
            "max": "5300"
          }
        ]
      },
      {
        "id": "KES",
        "limits": [
          {
            "id": "CARD",
            "min": "260",
            "max": "970000"
          }
        ]
      },
      {
        "id": "KHR",
        "limits": [
          {
            "id": "CARD",
            "min": "8100",
            "max": "30000000"
          }
        ]
      },
      {
        "id": "KWD",
        "limits": [
          {
            "id": "CARD",
            "min": "1",
            "max": "2300"
          }
        ]
      },
      {
        "id": "KZT",
        "limits": [
          {
            "id": "CARD",
            "min": "1000",
            "max": "3700000"
          }
        ]
      },
      {
        "id": "LKR",
        "limits": [
          {
            "id": "CARD",
            "min": "590",
            "max": "2100000"
          }
        ]
      },
      {
        "id": "MGA",
        "limits": [
          {
            "id": "CARD",
            "min": "9400",
            "max": "35000000"
          }
        ]
      },
      {
        "id": "MNT",
        "limits": [
          {
            "id": "CARD",
            "min": "6900",
            "max": "25000000"
          }
        ]
      },
      {
        "id": "MXN",
        "limits": [
          {
            "id": "CARD",
            "min": "41",
            "max": "150000"
          }
        ]
      },
      {
        "id": "NGN",
        "limits": [
          {
            "id": "CARD",
            "min": "3400",
            "max": "12000000"
          }
        ]
      },
      {
        "id": "NOK",
        "limits": [
          {
            "id": "CARD",
            "min": "23",
            "max": "82000"
          }
        ]
      },
      {
        "id": "NPR",
        "limits": [
          {
            "id": "CARD",
            "min": "280",
            "max": "1000000"
          }
        ]
      },
      {
        "id": "NZD",
        "limits": [
          {
            "id": "CARD",
            "min": "4",
            "max": "12000"
          }
        ]
      },
      {
        "id": "PAB",
        "limits": [
          {
            "id": "CARD",
            "min": "2",
            "max": "7500"
          }
        ]
      },
      {
        "id": "PEN",
        "limits": [
          {
            "id": "CARD",
            "min": "8",
            "max": "28000"
          }
        ]
      },
      {
        "id": "PHP",
        "limits": [
          {
            "id": "CARD",
            "min": "120",
            "max": "440000"
          }
        ]
      },
      {
        "id": "PKR",
        "limits": [
          {
            "id": "CARD",
            "min": "560",
            "max": "2000000"
          }
        ]
      },
      {
        "id": "PLN",
        "limits": [
          {
            "id": "CARD",
            "min": "9",
            "max": "30000"
          }
        ]
      },
      {
        "id": "RON",
        "limits": [
          {
            "id": "CARD",
            "min": "10",
            "max": "35000"
          }
        ]
      },
      {
        "id": "RSD",
        "limits": [
          {
            "id": "CARD",
            "min": "230",
            "max": "830000"
          }
        ]
      },
      {
        "id": "SEK",
        "limits": [
          {
            "id": "CARD",
            "min": "23",
            "max": "82000"
          }
        ]
      },
      {
        "id": "SGD",
        "limits": [
          {
            "id": "CARD",
            "min": "3",
            "max": "10000"
          }
        ]
      },
      {
        "id": "TRY",
        "limits": [
          {
            "id": "CARD",
            "min": "70",
            "max": "250000"
          }
        ]
      },
      {
        "id": "TWD",
        "limits": [
          {
            "id": "CARD",
            "min": "66",
            "max": "240000"
          }
        ]
      },
      {
        "id": "UAH",
        "limits": [
          {
            "id": "CARD",
            "min": "83",
            "max": "300000"
          }
        ]
      },
      {
        "id": "UGX",
        "limits": [
          {
            "id": "CARD",
            "min": "7400",
            "max": "27000000"
          }
        ]
      },
      {
        "id": "USD",
        "limits": [
          {
            "id": "CARD",
            "min": "2",
            "max": "7500"
          },
          {
            "id": "ACH_BANK_ACCOUNT",
            "min": "2",
            "max": "25000"
          }
        ]
      },
      {
        "id": "UYU",
        "limits": [
          {
            "id": "CARD",
            "min": "86",
            "max": "320000"
          }
        ]
      },
      {
        "id": "UZS",
        "limits": [
          {
            "id": "CARD",
            "min": "26000",
            "max": "96000000"
          }
        ]
      },
      {
        "id": "XAF",
        "limits": [
          {
            "id": "CARD",
            "min": "1300",
            "max": "4600000"
          }
        ]
      },
      {
        "id": "XOF",
        "limits": [
          {
            "id": "CARD",
            "min": "1300",
            "max": "4600000"
          }
        ]
      },
      {
        "id": "YER",
        "limits": [
          {
            "id": "CARD",
            "min": "500",
            "max": "1800000"
          }
        ]
      },
      {
        "id": "ZAR",
        "limits": [
          {
            "id": "CARD",
            "min": "37",
            "max": "130000"
          }
        ]
      },
      {
        "id": "ZMW",
        "limits": [
          {
            "id": "CARD",
            "min": "56",
            "max": "200000"
          }
        ]
      }
    ],
    "purchase_currencies": [
      {
        "id": "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
        "name": "Bitcoin",
        "symbol": "BTC",
        "networks": [
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
            "chain_id": "42161"
          },
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij",
            "chain_id": "0"
          },
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
            "chain_id": "1"
          },
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
            "chain_id": "8453"
          },
          {
            "name": "bitcoin",
            "display_name": "Bitcoin",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "45f99e13-b522-57d7-8058-c57bf92fe7a3",
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "networks": [
          {
            "name": "bitcoincash",
            "display_name": "Bitcoin Cash",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "d85dce9b-5b73-5c3c-8978-522ce1d1c1b4",
        "name": "Ethereum",
        "symbol": "ETH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "",
            "chain_id": "1"
          },
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "",
            "chain_id": "42161"
          },
          {
            "name": "avacchain",
            "display_name": "Avalanche C-Chain",
            "contract_address": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
            "chain_id": "43114"
          },
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "",
            "chain_id": "8453"
          },
          {
            "name": "optimism",
            "display_name": "Optimism",
            "contract_address": "",
            "chain_id": "10"
          },
          {
            "name": "polygon",
            "display_name": "Polygon",
            "contract_address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
            "chain_id": "137"
          }
        ]
      },
      {
        "id": "c16df856-0345-5358-8a70-2a78c804e61f",
        "name": "Ethereum Classic",
        "symbol": "ETC",
        "networks": [
          {
            "name": "ethereumclassic",
            "display_name": "Ethereum Classic",
            "contract_address": "",
            "chain_id": "61"
          }
        ]
      },
      {
        "id": "c9c24c6e-c045-5fde-98a2-00ea7f520437",
        "name": "Litecoin",
        "symbol": "LTC",
        "networks": [
          {
            "name": "litecoin",
            "display_name": "Litecoin",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "a2a8f5ae-83a6-542e-9064-7d335ae8a58d",
        "name": "0x Protocol",
        "symbol": "ZRX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "2b92315d-eab7-5bef-84fa-089a131333f5",
        "name": "USDC",
        "symbol": "USDC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "chain_id": "1"
          },
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            "chain_id": "42161"
          },
          {
            "name": "avacchain",
            "display_name": "Avalanche C-Chain",
            "contract_address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
            "chain_id": "43114"
          },
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            "chain_id": "8453"
          },
          {
            "name": "noble",
            "display_name": "Noble",
            "contract_address": "uusdc",
            "chain_id": "0"
          },
          {
            "name": "optimism",
            "display_name": "Optimism",
            "contract_address": "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
            "chain_id": "10"
          },
          {
            "name": "polygon",
            "display_name": "Polygon",
            "contract_address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
            "chain_id": "137"
          },
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "chain_id": "0"
          },
          {
            "name": "stellar",
            "display_name": "Stellar",
            "contract_address": "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
            "chain_id": "0"
          },
          {
            "name": "sui",
            "display_name": "Sui",
            "contract_address": "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "b8950bef-d61b-53cd-bb66-db436f0f81bc",
        "name": "Basic Attention Token",
        "symbol": "BAT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "66b98195-0562-586b-8cee-ee7f57923fef",
        "name": "Decentraland",
        "symbol": "MANA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "8c853af0-5071-5dd7-9f70-1a871107f53c",
        "name": "Kyber Network",
        "symbol": "KNC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "ea3107c6-416b-5b02-b99f-ded31a0cbdfe",
        "name": "Chainlink",
        "symbol": "LINK",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "8dd8a49c-e75c-5c56-a353-468f6346ed93",
        "name": "district0x",
        "symbol": "DNT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0AbdAce70D3790235af448C88547603b945604ea",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "5553e486-7a85-5433-a5c1-aaeb18a154dd",
        "name": "Maker",
        "symbol": "MKR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "6b12b7ee-2295-5bd3-b4a2-fe711055d79f",
        "name": "Civic",
        "symbol": "CVC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "01e9e33b-d099-56fb-aa3b-76c19d0b250e",
        "name": "Dai",
        "symbol": "DAI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "chain_id": "1"
          },
          {
            "name": "avacchain",
            "display_name": "Avalanche C-Chain",
            "contract_address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
            "chain_id": "43114"
          },
          {
            "name": "optimism",
            "display_name": "Optimism",
            "contract_address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            "chain_id": "10"
          },
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            "chain_id": "42161"
          }
        ]
      },
      {
        "id": "1d3c2625-a8d9-5458-84d0-437d75540421",
        "name": "Zcash",
        "symbol": "ZEC",
        "networks": [
          {
            "name": "zcash",
            "display_name": "Zcash",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "e17a44c8-6ea1-564f-a02c-2a9ca1d8eec4",
        "name": "XRP",
        "symbol": "XRP",
        "networks": [
          {
            "name": "ripple",
            "display_name": "XRPL",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "13b83335-5ede-595b-821e-5bcdfa80560f",
        "name": "Stellar Lumens",
        "symbol": "XLM",
        "networks": [
          {
            "name": "stellar",
            "display_name": "Stellar",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "8d556883-6c26-5a88-9d8f-fa41fe8ed76e",
        "name": "EOS",
        "symbol": "EOS",
        "networks": [
          {
            "name": "eosio",
            "display_name": "EOS",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "69e559ec-547a-520a-aeb3-01cac23f1826",
        "name": "Tezos",
        "symbol": "XTZ",
        "networks": [
          {
            "name": "tezos",
            "display_name": "Tezos",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "9220d47f-bc0a-53ad-9646-ef49918adcf3",
        "name": "Algorand",
        "symbol": "ALGO",
        "networks": [
          {
            "name": "algorand",
            "display_name": "Algorand",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "b9c43d61-e77d-5e02-9a0d-800b50eb9d5f",
        "name": "Dash",
        "symbol": "DASH",
        "networks": [
          {
            "name": "dash",
            "display_name": "Dash",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "64c607d2-4663-5649-86e0-3ab06bba0202",
        "name": "Cosmos",
        "symbol": "ATOM",
        "networks": [
          {
            "name": "cosmos",
            "display_name": "Cosmos",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "07525606-a404-5f15-a71d-ba0e40e74eca",
        "name": "Orchid",
        "symbol": "OXT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "65557d44-082d-50a1-a68b-bc98d961f794",
        "name": "Compound",
        "symbol": "COMP",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "bf3edc12-9feb-556f-a181-ae8a25cf073b",
        "name": "Band Protocol",
        "symbol": "BAND",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "30dac328-eae0-523a-835e-aef52596d0dc",
        "name": "Numeraire",
        "symbol": "NMR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "cfc02e75-e09b-535b-b35c-3c8bb0e63462",
        "name": "Celo",
        "symbol": "CGLD",
        "networks": [
          {
            "name": "celo",
            "display_name": "Celo Gold",
            "contract_address": "0x471ece3750da237f93b8e339c536989b8978a438",
            "chain_id": "42220"
          }
        ]
      },
      {
        "id": "003db351-767e-5656-b32d-8ce553310814",
        "name": "UMA",
        "symbol": "UMA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "6ffa1a5b-622b-596b-893a-56cfb152beb2",
        "name": "Loopring",
        "symbol": "LRC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "8ebe6e4d-8bd6-5be0-8dca-aaa18a188915",
        "name": "yearn.finance",
        "symbol": "YFI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "412832ad-59dd-5af8-8d36-99ebda3afb80",
        "name": "Uniswap",
        "symbol": "UNI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "e0409f05-5a95-5abf-8082-c746da699f82",
        "name": "Balancer",
        "symbol": "BAL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xba100000625a3754423978a60c9317c58a424e3D",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a52f80f6-c533-593a-aead-a6fc8eea643c",
        "name": "Wrapped Bitcoin",
        "symbol": "WBTC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            "chain_id": "1"
          },
          {
            "name": "avacchain",
            "display_name": "Avalanche C-Chain",
            "contract_address": "0x50b7545627a5162F82A992c33b87aDc75187B218",
            "chain_id": "43114"
          },
          {
            "name": "optimism",
            "display_name": "Optimism",
            "contract_address": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
            "chain_id": "10"
          },
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
            "chain_id": "42161"
          }
        ]
      },
      {
        "id": "0a5b73d1-a976-5966-b3ff-86be8f9b65d5",
        "name": "Filecoin",
        "symbol": "FIL",
        "networks": [
          {
            "name": "filecoin",
            "display_name": "Filecoin",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "b1646860-6b23-5f7d-a506-cba0902f0ca9",
        "name": "Aave",
        "symbol": "AAVE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "1b74d2fd-fa35-558d-a010-38d4481398c6",
        "name": "Bancor Network Token",
        "symbol": "BNT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3f9b015d-387d-589b-b65d-bd6d24babc96",
        "name": "The Graph",
        "symbol": "GRT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3bd5bbea-a525-520c-9d2a-2d842e543caa",
        "name": "Synthetix Network Token",
        "symbol": "SNX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a5c6ceac-9226-55a7-a2dc-59d9149083d6",
        "name": "Storj",
        "symbol": "STORJ",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "ac7c7224-ae69-5e46-8923-983b472203ea",
        "name": "SushiSwap",
        "symbol": "SUSHI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "026bcc1e-9163-591c-a709-34dd18b2e7a1",
        "name": "Polygon",
        "symbol": "MATIC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "af2d755d-6142-57f4-a092-0aa4fe67a9b5",
        "name": "SKALE",
        "symbol": "SKL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "63062039-7afb-56ff-8e19-5e3215dc404a",
        "name": "Cardano",
        "symbol": "ADA",
        "networks": [
          {
            "name": "cardano",
            "display_name": "ADA",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "5d88223d-ce08-529d-b533-e318d6ba4d79",
        "name": "Ankr",
        "symbol": "ANKR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "48a63b4a-1024-5cbe-9132-5dcc7792487d",
        "name": "Curve DAO Token",
        "symbol": "CRV",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "8f0fb5e8-9924-50bd-b95c-1d4b88fd20cc",
        "name": "Internet Computer",
        "symbol": "ICP",
        "networks": [
          {
            "name": "dfinity",
            "display_name": "Internet Computer Protocol",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "89cf59a7-afb8-574d-9e37-8ac01e374e7a",
        "name": "NKN",
        "symbol": "NKN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x5Cf04716BA20127F1E2297AdDCf4B5035000c9eb",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "070e2e07-1f4c-5556-9b3c-22f924e9fa1a",
        "name": "Origin Token",
        "symbol": "OGN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "484f30a6-9e06-58df-80b7-e63141e3ca0c",
        "name": "1inch",
        "symbol": "1INCH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x111111111117dC0aa78b770fA6A738034120C302",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b26327c1-9a34-51d9-b982-9b29e6012648",
        "name": "Tether",
        "symbol": "USDT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a9b7db60-a25f-52c3-9df8-24fdfe16de1d",
        "name": "Ampleforth Governance Token",
        "symbol": "FORTH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x77FbA179C79De5B7653F68b5039Af940AdA60ce0",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "7588d1dc-2aba-5357-85b6-6b728e85ad55",
        "name": "Cartesi",
        "symbol": "CTSI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "248f278e-1c74-5b55-a554-4f3ee1aef291",
        "name": "Tellor",
        "symbol": "TRB",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "2a3e5cc1-7ef1-5a32-bf56-95aa79983f13",
        "name": "iExec RLC",
        "symbol": "RLC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x607F4C5BB672230e8672085532f7e901544a7375",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "ebea861a-c0ae-5323-bbe0-46893a119a39",
        "name": "Polkadot",
        "symbol": "DOT",
        "networks": [
          {
            "name": "polkadot",
            "display_name": "Polkadot",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "4f039497-3af8-5bb3-951c-6df9afa9be1c",
        "name": "Solana",
        "symbol": "SOL",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "d9a3edfa-1be7-589c-bd20-c034f3830b60",
        "name": "Dogecoin",
        "symbol": "DOGE",
        "networks": [
          {
            "name": "dogecoin",
            "display_name": "Dogecoin",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "15cbd0cf-ac58-512f-87f7-8078fa9a3f2a",
        "name": "Enzyme",
        "symbol": "MLN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "19ca00b2-3058-5e4b-a84b-c84b74baed10",
        "name": "Gitcoin",
        "symbol": "GTC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "f3b62870-ddd0-5dea-9d80-5190d8558461",
        "name": "Amp",
        "symbol": "AMP",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "d6031388-71ab-59c7-8a15-a56ec20d6080",
        "name": "SHIBA INU",
        "symbol": "SHIB",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3b6a0532-d638-58ab-b7f8-16ead09d686d",
        "name": "Chiliz",
        "symbol": "CHZ",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "31acd6f6-d560-5a59-b77d-f9fa57c19167",
        "name": "Livepeer",
        "symbol": "LPT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x58b6A8A3302369DAEc383334672404Ee733aB239",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "13a06dc2-f4c7-58c1-91f0-f4ad4a867f82",
        "name": "Quant",
        "symbol": "QNT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x4a220E6096B25EADb88358cb44068A3248254675",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "453639be-192e-5e36-88e3-38496e542524",
        "name": "Clover Finance",
        "symbol": "CLV",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x80C62FE4487E1351b47Ba49809EBD60ED085bf52",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "7ea0bd74-3cab-5bf8-94e2-f0c0b3896f07",
        "name": "Harvest Finance",
        "symbol": "FARM",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xa0246c9032bC3A600820415aE600c6388619A14D",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "45ce7f01-2962-5576-8dfd-449e4a49b75d",
        "name": "Mask Network",
        "symbol": "MASK",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3672ab4a-25e0-57a8-b029-99239c081958",
        "name": "Artificial Superintelligence Alliance",
        "symbol": "FET",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "be4a78af-d300-59b0-9c70-ba42a93caf56",
        "name": "Paxos Standard",
        "symbol": "PAX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "045e4fab-f2ca-58a3-ac2b-8c47c5d23968",
        "name": "Alchemy Pay",
        "symbol": "ACH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xEd04915c23f00A313a544955524EB7DBD823143d",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "49e1401a-48a0-58ac-881d-03ef6894a038",
        "name": "Assemble AI",
        "symbol": "ASM",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x2565ae0385659badCada1031DB704442E1b69982",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "0c275161-fb4b-50c4-926b-d4d7d093b897",
        "name": "Orion Protocol",
        "symbol": "ORN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "56f8ea19-7e6a-5e38-ac47-fc9762b955ae",
        "name": "IoTeX",
        "symbol": "IOTX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b76225e9-3cff-5c6f-88a2-2490f70cb02e",
        "name": "Axie Infinity",
        "symbol": "AXS",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "7c6cf248-e06b-5426-a05d-ac2777159a11",
        "name": "Request",
        "symbol": "REQ",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "248c3984-79c8-5df2-a35d-bbd3a3e16e70",
        "name": "TrueFi",
        "symbol": "TRU",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "aa75e77c-c936-58a2-9d3c-afb7f23886e1",
        "name": "Radworks",
        "symbol": "RAD",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "95c91657-a486-5b3f-a6e4-d0831331dcd1",
        "name": "COTI",
        "symbol": "COTI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xDDB3422497E61e13543BeA06989C0789117555c5",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "bfb347d2-9510-5a8f-8aed-001fd3e1131d",
        "name": "SUKU",
        "symbol": "SUKU",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0763fdCCF1aE541A5961815C0872A8c5Bc6DE4d7",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "36d68172-0e1b-5a94-845a-a1e4e1022b75",
        "name": "XYO",
        "symbol": "XYO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x55296f69f40Ea6d20E478533C15A6B08B654E758",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "ef343d07-52fe-5fee-88ad-ddf1a9e2d852",
        "name": "Horizen",
        "symbol": "ZEN",
        "networks": [
          {
            "name": "horizen",
            "display_name": "Horizen",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "7a1e328d-6acc-560f-9789-bbce4c570f45",
        "name": "AirSwap",
        "symbol": "AST",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x27054b13b1B798B345b591a4d22e6562d47eA75a",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "fea50790-50ec-5460-9ea0-b5817de4d17e",
        "name": "Bounce Token",
        "symbol": "AUCTION",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c0158cc5-1f31-5662-9da5-c06867f2baad",
        "name": "Jasmy",
        "symbol": "JASMY",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "19f93d90-a629-53d3-b1c1-45b874e9f125",
        "name": "Wrapped Centrifuge",
        "symbol": "WCFG",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xc221b7E65FfC80DE234bbB6667aBDd46593D34F0",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "14364054-394d-5135-a4a8-526e9a8deacd",
        "name": "Braintrust",
        "symbol": "BTRST",
        "networks": [
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0xA7d68d155d17cB30e311367c2Ef1E82aB6022b67",
            "chain_id": "8453"
          },
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x799ebfABE77a6E34311eeEe9825190B9ECe32824",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "9941a614-00ea-5d1c-bfdf-efdc4c1e58e0",
        "name": "Adventure Gold",
        "symbol": "AGLD",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "9d06e463-b3ba-5abf-9082-8761846b28ab",
        "name": "Avalanche",
        "symbol": "AVAX",
        "networks": [
          {
            "name": "avacchain",
            "display_name": "Avalanche C-Chain",
            "contract_address": "",
            "chain_id": "43114"
          }
        ]
      },
      {
        "id": "a2b48bde-1149-5cb7-9ddb-57563bb4d63b",
        "name": "Function X",
        "symbol": "FX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "8952b259-c4e1-5947-88c2-7be991270114",
        "name": "OriginTrail",
        "symbol": "TRAC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "1fd23f09-07b6-54eb-a200-59b2e7f5d065",
        "name": "LCX",
        "symbol": "LCX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x037A54AaB062628C9Bbae1FDB1583c195585fe41",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "5fcaa9b6-cea0-52af-bbd4-40c8053ef49f",
        "name": "ARPA Chain",
        "symbol": "ARPA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xBA50933C268F567BDC86E1aC131BE072C6B0b71a",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a198c9fb-15af-500b-9e48-359843aeabd0",
        "name": "Badger DAO",
        "symbol": "BADGER",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "015db578-d600-5613-8736-0eec500dfc4d",
        "name": "Kryll",
        "symbol": "KRL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x464eBE77c293E473B48cFe96dDCf88fcF7bFDAC0",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "830f84b1-ade4-50a7-a33e-e159e136ad45",
        "name": "Perpetual Protocol",
        "symbol": "PERP",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c148e875-86eb-5f25-adcf-a51d01120886",
        "name": "Rarible",
        "symbol": "RARI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "4e181288-ccce-562d-8c4f-787afa655204",
        "name": "API3",
        "symbol": "API3",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "37b43246-7803-559e-b4b6-5ba73f137d22",
        "name": "PolySwarm",
        "symbol": "NCT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x9E46A38F5DaaBe8683E10793b06749EEF7D733d1",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "31e33a5d-2ee0-51ae-b172-51163e486230",
        "name": "SHPING",
        "symbol": "SHPING",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x7C84e62859D0715eb77d1b1C4154Ecd6aBB21BEC",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "2d6b2001-dd44-5f5c-bc33-ed43d3e3c8f0",
        "name": "Cronos",
        "symbol": "CRO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3e0240e8-b40f-5a1e-9495-1490a122d4bf",
        "name": "Arcblock",
        "symbol": "ABT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xB98d4C97425d9908E66E53A6fDf673ACcA0BE986",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "dc4be333-d4b3-5ba4-94ac-7f8570ed93a2",
        "name": "Convex Finance",
        "symbol": "CVX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b0115e95-4015-5352-9931-da8f6bbf91e6",
        "name": "Aventus",
        "symbol": "AVT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0d88eD6E74bbFD96B831231638b66C05571e824F",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "76989be1-d882-599a-82ac-bb3b2e2a7db3",
        "name": "Measurable Data Token",
        "symbol": "MDT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c312e620-7011-59bc-93b5-9c03832ce252",
        "name": "Alchemix",
        "symbol": "ALCX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "17278d3a-ecf4-584f-abe1-903f2b06aad5",
        "name": "Shapeshift FOX Token",
        "symbol": "FOX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "322ae040-e3a8-52b8-a5eb-3026ed9b9f71",
        "name": "Celer Network",
        "symbol": "CELR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "7e7828ba-1b70-56ce-be2d-0a155c9eff82",
        "name": "Powerledger",
        "symbol": "POWR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x595832F8FC6BF59c85C527fEC3740A1b7a361269",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "86dc2208-a258-5ea2-b1bc-5039d3767f5b",
        "name": "GYEN",
        "symbol": "GYEN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xC08512927D12348F6620a698105e1BAac6EcD911",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "e1c4777e-0377-5ccd-be1e-fdb757acb297",
        "name": "MyNeighborAlice",
        "symbol": "ALICE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "29f11294-d51f-5f60-8e8b-e5c23ca3ea22",
        "name": "Inverse Finance",
        "symbol": "INV",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "8943ba88-a949-5ba2-b7c0-4e30f8208bac",
        "name": "Liquity",
        "symbol": "LQTY",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "ba3dd7df-6c9c-52cf-b0ba-829b1dba63c9",
        "name": "Propy",
        "symbol": "PRO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x226bb599a12C826476e3A771454697EA52E9E220",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "43effdcf-ee0b-5b00-bba7-271865f42c33",
        "name": "Spell Token",
        "symbol": "SPELL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x090185f2135308BaD17527004364eBcC2D37e5F6",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "7a35374a-479b-4d5a-b0af-5824224a8743",
        "name": "Ethereum Name Service",
        "symbol": "ENS",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "d8d9de8a-d13b-57bc-99cb-b1d546f820d6",
        "name": "DIA",
        "symbol": "DIA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "fc728438-099c-55f2-b3bf-e50452e78157",
        "name": "Bluzelle",
        "symbol": "BLZ",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x5732046A883704404F284Ce41FfADd5b007FD668",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "6e8a50fb-9270-52aa-9261-86bf9fa8b2ec",
        "name": "Cryptex Finance",
        "symbol": "CTX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x321C2fE4446C7c963dc41Dd58879AF648838f98D",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "016a52e7-91fb-5d8b-84b3-a213a66068cb",
        "name": "Ethernity Chain",
        "symbol": "ERN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a1f72e0a-bb57-5504-8ed8-d8362e543b5f",
        "name": "IDEX",
        "symbol": "IDEX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xB705268213D593B8FD88d3FDEFF93AFF5CbDcfAE",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "963d6e5a-b08c-59d9-9ed0-d616c6c5dd4b",
        "name": "Polkastarter",
        "symbol": "POLS",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "25c25663-7d03-5fd5-b8fb-31aa596d5a0d",
        "name": "Stacks",
        "symbol": "STX",
        "networks": [
          {
            "name": "stacks",
            "display_name": "Stacks",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "b9ec935a-0de3-5071-a28c-6a40104d30b4",
        "name": "Kusama",
        "symbol": "KSM",
        "networks": [
          {
            "name": "kusama",
            "display_name": "Kusama",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "c9b055af-2d25-49b3-b449-42bec9846a30",
        "name": "Gods Unchained",
        "symbol": "GODS",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xccC8cb5229B0ac8069C51fd58367Fd1e622aFD97",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "1143be59-e5ec-4942-8c39-1c3424499ae0",
        "name": "Immutable",
        "symbol": "IMX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c20d46ab-70a2-4c59-81e7-ef3a035e22a3",
        "name": "Ribbon Finance",
        "symbol": "RBN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6123B0049F904d730dB3C36a31167D9d4121fA6B",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "5dd73cfd-42bf-4383-8263-af3130198de6",
        "name": "BICONOMY (BICO)",
        "symbol": "BICO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xF17e65822b568B3903685a7c9F496CF7656Cc6C2",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b84ad585-cbf9-48a5-91fb-bc35c9dcca14",
        "name": "Goldfinch Protocol",
        "symbol": "GFI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xdab396cCF3d84Cf2D07C4454e10C8A6F5b008D2b",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "aa0a157e-a9df-4467-9ee8-36eaa99df1c8",
        "name": "Golem",
        "symbol": "GLM",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "725fefe7-2631-5cf3-8a26-8e94101c3f76",
        "name": "Maple",
        "symbol": "MPL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x33349B282065b0284d756F0577FB39c158F935e6",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b7ecf251-60ee-5aa6-8271-2b946cc58edd",
        "name": "Pluton",
        "symbol": "PLU",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "63d08c0c-c705-59d9-9cd0-927803fdff7d",
        "name": "SwftCoin",
        "symbol": "SWFTC",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "9c5f6f8e-b912-5516-9ae5-a0670be7f541",
        "name": "The Sandbox",
        "symbol": "SAND",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "27ade651-5bbc-57d2-b087-60171ae9d337",
        "name": "Ocean Protocol",
        "symbol": "OCEAN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "90f65914-63bf-5101-b9e7-b58bc1f42b5d",
        "name": "Gnosis",
        "symbol": "GNO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6810e776880C02933D47DB1b9fc05908e5386b96",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3a92fbde-9bb9-51ee-a994-f52c78837be5",
        "name": "Bonfida",
        "symbol": "FIDA",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "ba24ad7b-0a8b-533d-816b-e693d9f8a871",
        "name": "Orca",
        "symbol": "ORCA",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "045e25f3-4756-59c0-8ef9-34b8eaa1cbfd",
        "name": "Render (ERC-20)",
        "symbol": "RNDR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3141897b-ffc4-5c82-a1e3-449f46531d3c",
        "name": "PARSIQ",
        "symbol": "PRQ",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a04e1e05-168c-5726-81fe-6e55d2352b15",
        "name": "HOPR",
        "symbol": "HOPR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xF5581dFeFD8Fb0e4aeC526bE659CFaB1f8c781dA",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "bdf737d1-72d5-553f-b1a1-d70e27dba482",
        "name": "MATH",
        "symbol": "MATH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x08d967bb0134F2d07f7cfb6E246680c53927DD30",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "57400cc9-2be8-4977-b800-7cc075968590",
        "name": "Synapse",
        "symbol": "SYN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0f2D719407FdBeFF09D87557AbB7232601FD9F29",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "ed556ed5-2805-5511-9f26-bb1c27d1717c",
        "name": "AIOZ Network",
        "symbol": "AIOZ",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x626E8036dEB333b408Be468F951bdB42433cBF18",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "4823e87c-2f86-5fb3-81e8-46b6365e83df",
        "name": "Aergo",
        "symbol": "AERGO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x91Af0fBB28ABA7E31403Cb457106Ce79397FD4E6",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "eb7c958f-2f43-5afb-b743-e61a4a90092d",
        "name": "Index Cooperative",
        "symbol": "INDEX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0954906da0Bf32d5479e25f46056d22f08464cab",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "6f3a09bb-bd98-4451-bbfa-a4d7604828ea",
        "name": "Highstreet",
        "symbol": "HIGH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x71Ab77b7dbB4fa7e017BC15090b2163221420282",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "77b5b147-5813-535b-a2a5-db712a213715",
        "name": "Flow",
        "symbol": "FLOW",
        "networks": [
          {
            "name": "flow",
            "display_name": "Flow",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "bfbc233f-5477-554b-8e9e-fd926406596d",
        "name": "Oasis Network",
        "symbol": "ROSE",
        "networks": [
          {
            "name": "oasis",
            "display_name": "Oasis",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "e42fb72f-2d7d-4a2c-803e-a5d87c40963b",
        "name": "ApeCoin",
        "symbol": "APE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a4ffc575-942c-5e26-b70c-cb3befdd4229",
        "name": "Mina",
        "symbol": "MINA",
        "networks": [
          {
            "name": "mina",
            "display_name": "Mina",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "dd391a26-4402-478f-950c-2af0178527b5",
        "name": "Green Satoshi Token",
        "symbol": "GST",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "eafbbb96-8d35-4f42-99b6-a4779660442f",
        "name": "STEPN",
        "symbol": "GMT",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "29418251-9004-5293-9ffe-7bdaa7784f19",
        "name": "Media Network",
        "symbol": "MEDIA",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "9811803c-3c98-46a0-9e1c-3ae664677a49",
        "name": "Galxe",
        "symbol": "GAL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x5fAa989Af96Af85384b8a938c2EdE4A7378D9875",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "627b8bbb-9908-41be-87a8-1c9c87b6c5e7",
        "name": "Optimism",
        "symbol": "OP",
        "networks": [
          {
            "name": "optimism",
            "display_name": "Optimism",
            "contract_address": "0x4200000000000000000000000000000000000042",
            "chain_id": "10"
          }
        ]
      },
      {
        "id": "ebf4b864-b429-533f-bf13-16e1aa9f49dd",
        "name": "Coin98",
        "symbol": "C98",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xAE12C5930881c53715B369ceC7606B70d8EB229f",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "2abbacb6-524c-5a81-89a4-51c94b36769b",
        "name": "BitDAO",
        "symbol": "BIT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "35d92d60-4175-446c-a796-ae59c54693e4",
        "name": "Mines of Dalarnia",
        "symbol": "DAR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x081131434f93063751813C619Ecca9C4dC7862a3",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "748257f0-fb9c-5f0d-8a4b-f6402051b7fd",
        "name": "Marlin",
        "symbol": "POND",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x57B946008913B82E4dF85f501cbAeD910e58D26C",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c4872eef-36a7-50bf-9450-510a9405edf9",
        "name": "StaFi",
        "symbol": "FIS",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xef3A930e1FfFFAcd2fc13434aC81bD278B0ecC8d",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "8b3c5910-a926-564d-a7e9-7d694bff0650",
        "name": "Gemini Dollar",
        "symbol": "GUSD",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "5829e0da-1c40-4c5c-b123-019116d44f10",
        "name": "Forta",
        "symbol": "FORT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x41545f8b9472D758bB669ed8EaEEEcD7a9C4Ec29",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "23cd23c2-ba2c-5343-af47-cb3cefa17f37",
        "name": "Aleph.im",
        "symbol": "ALEPH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b8bd76e1-97cf-5c8c-be55-8b26843bd4f9",
        "name": "Elastos",
        "symbol": "ELA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xe6fd75ff38Adca4B97FBCD938c86b98772431867",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "426f088e-76ef-5593-a45f-ff638522fd16",
        "name": "Chrono.tech",
        "symbol": "TIME",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x485d17A6f1B8780392d53D64751824253011A260",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "6a9b98f5-5902-5379-8adb-7364490e7cdd",
        "name": "Muse",
        "symbol": "MUSE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xB6Ca7399B4F9CA56FC27cBfF44F4d2e4Eef1fc81",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "f7dc9e4c-c2e7-55f8-b35c-bc63e3de689b",
        "name": "Dypius",
        "symbol": "DYP",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "6aa3f777-23da-578b-91e6-08a33c5b70b5",
        "name": "DEXTools",
        "symbol": "DEXT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xfB7B4564402E5500dB5bB6d63Ae671302777C75a",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "161f5d0a-1657-4300-b072-3f9cb4d6bdad",
        "name": "Coinbase Wrapped Staked ETH",
        "symbol": "CBETH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
            "chain_id": "1"
          },
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0x1DEBd73E752bEaF79865Fd6446b0c970EaE7732f",
            "chain_id": "42161"
          },
          {
            "name": "optimism",
            "display_name": "Optimism",
            "contract_address": "0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2",
            "chain_id": "10"
          },
          {
            "name": "polygon",
            "display_name": "Polygon",
            "contract_address": "0x4b4327dB1600B8B1440163F667e199CEf35385f5",
            "chain_id": "137"
          },
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
            "chain_id": "8453"
          }
        ]
      },
      {
        "id": "f1d6e426-c6a4-5cf8-b832-a8e877439a3e",
        "name": "Metis",
        "symbol": "METIS",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c7b9f5bb-e4a4-48b2-89df-0be386ed83a6",
        "name": "Onyxcoin",
        "symbol": "XCN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xA2cd3D43c775978A96BdBf12d733D5A1ED94fb18",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "286c7042-9314-435f-936b-d708ba11a59d",
        "name": "Boba Network",
        "symbol": "BOBA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x42bBFa2e77757C645eeaAd1655E0911a7553Efbc",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "431d70b2-be25-551b-83f9-a61e90b5d892",
        "name": "SuperRare",
        "symbol": "RARE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xba5BDe662c17e2aDFF1075610382B9B691296350",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "2d658fea-6082-59a2-86f4-b0f79a8bfc72",
        "name": "Lido DAO Token",
        "symbol": "LDO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "9389bdc0-7061-5a8c-97db-3de40cc0a951",
        "name": "Pangolin",
        "symbol": "PNG",
        "networks": [
          {
            "name": "avacchain",
            "display_name": "Avalanche C-Chain",
            "contract_address": "0x60781C2586D68229fde47564546784ab3fACA982",
            "chain_id": "43114"
          }
        ]
      },
      {
        "id": "bd07f41c-1cc2-4d51-8fa6-d3c957ca0370",
        "name": "League of Kingdoms Arena",
        "symbol": "LOKA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x61E90A50137E1F645c9eF4a0d3A4f01477738406",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "0d150a7d-821e-5ca4-a17e-17f206668ecd",
        "name": "Injective",
        "symbol": "INJ",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "f13ce9c6-617f-5d85-901c-c6affcde9416",
        "name": "Illuvium",
        "symbol": "ILV",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "79691bcf-5c2d-54d0-bef9-ea0f128a472b",
        "name": "Audius",
        "symbol": "AUDIO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "79719406-aada-56c0-8194-65ef670e823b",
        "name": "Rocket Pool",
        "symbol": "RPL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xD33526068D116cE69F19A9ee46F0bd304F21A51f",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "dc8930f5-133d-4265-91d5-9e5d2d453013",
        "name": "Stargate Finance",
        "symbol": "STG",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a0882482-a339-569c-a7cc-fa9b1c1122e4",
        "name": "Litentry",
        "symbol": "LIT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b695018e-a840-42e2-8f1f-db59efd95eb1",
        "name": "Aurora",
        "symbol": "AURORA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xAaAAAA20D9E0e2461697782ef11675f668207961",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "9f1b558c-cdd3-5ffe-9d69-0e34a62e82a7",
        "name": "SuperVerse",
        "symbol": "SUPER",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "979a75c9-9466-5e6b-9545-930a89a3db8f",
        "name": "NEAR Protocol",
        "symbol": "NEAR",
        "networks": [
          {
            "name": "near",
            "display_name": "Near",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "60eb9c6e-ad04-54d5-bb2a-574f9fdb7786",
        "name": "Hedera",
        "symbol": "HBAR",
        "networks": [
          {
            "name": "hedera",
            "display_name": "Hedera",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "347497c3-a460-5324-994b-58a331c64ac0",
        "name": "Pundi X (New)",
        "symbol": "PUNDIX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "1ce4c6c4-2f02-5126-b60b-8f839d79f443",
        "name": "Vulcan Forged PYR",
        "symbol": "PYR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x430EF9263E76DAE63c84292C3409D61c598E9682",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "ffdece68-6dd9-4783-b778-b11104b2126e",
        "name": "00 Token",
        "symbol": "00",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x881Ba05de1E78f549cC63a8f6Cabb1d4AD32250D",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "afb7c221-a5f4-4ddd-ba23-61e627dad8b6",
        "name": "Wrapped Axelar",
        "symbol": "WAXL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x467719aD09025FcC6cF6F8311755809d45a5E5f3",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "976e5f1e-e419-4eac-990e-76caf525c6af",
        "name": "Aptos",
        "symbol": "APT",
        "networks": [
          {
            "name": "aptos",
            "display_name": "Aptos",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "147c2535-ea2e-472b-8816-ee7305a99b16",
        "name": "Marinade Staked SOL",
        "symbol": "MSOL",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "222c1961-14c6-428a-afc4-bb2e1ece75e9",
        "name": "Marinade",
        "symbol": "MNDE",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "5d0dacd0-0908-4f62-a9c7-670db0c0795d",
        "name": "Voxies",
        "symbol": "VOXEL",
        "networks": [
          {
            "name": "polygon",
            "display_name": "Polygon",
            "contract_address": "0xd0258a3fD00f38aa8090dfee343f10A9D4d30D3F",
            "chain_id": "137"
          }
        ]
      },
      {
        "id": "c8c774bb-6f96-46de-bd05-6f6f9744f21f",
        "name": "Hashflow",
        "symbol": "HFT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xb3999F658C0391d94A37f7FF328F3feC942BcADC",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "e584e190-2ea2-5d67-b1b7-15222b94933c",
        "name": "MultiversX",
        "symbol": "EGLD",
        "networks": [
          {
            "name": "elrond",
            "display_name": "MultiversX",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "1fb6e9bd-293e-547b-909f-dea89d755d4b",
        "name": "Kava",
        "symbol": "KAVA",
        "networks": [
          {
            "name": "kava",
            "display_name": "Kava",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "3ff79649-7c62-5236-8466-0e2207ad43d6",
        "name": "BENQI",
        "symbol": "QI",
        "networks": [
          {
            "name": "avacchain",
            "display_name": "Avalanche C-Chain",
            "contract_address": "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
            "chain_id": "43114"
          }
        ]
      },
      {
        "id": "bcb2ab07-bb8a-5e68-a4e9-a7bf971877d3",
        "name": "Aavegotchi",
        "symbol": "GHST",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x3F382DbD960E3a9bbCeaE22651E88158d2791550",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "a8f61947-fb51-462e-b133-6157809faf2c",
        "name": "MAGIC",
        "symbol": "MAGIC",
        "networks": [
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
            "chain_id": "42161"
          }
        ]
      },
      {
        "id": "14a1e32e-ca36-426f-83f3-6d8d8e9aa423",
        "name": "Axelar",
        "symbol": "AXL",
        "networks": [
          {
            "name": "axelar",
            "display_name": "Axelar",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "48456872-2ff7-4cc3-8fe9-c101d0fb073c",
        "name": "Ondo Finance",
        "symbol": "ONDO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xfAbA6f8e4a5E8Ab82F62fe7C39859FA577269BE3",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "69dd7ce5-6123-4bd0-9f10-1b334198fe87",
        "name": "Threshold",
        "symbol": "T",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xCdF7028ceAB81fA0C6971208e83fa7872994beE5",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3142459a-c28c-5256-919d-8dcf0c2a4a41",
        "name": "Virtua",
        "symbol": "TVK",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c998b825-ac60-4414-b960-6111abb81a53",
        "name": "DIMO",
        "symbol": "DIMO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x5fab9761d60419C9eeEbe3915A8FA1ed7e8d2E1B",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "1a4ff613-d32e-4a44-93a1-4db0b5182296",
        "name": "Liquid Staked ETH",
        "symbol": "LSETH",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x8c1BEd5b9a0928467c9B1341Da1D7BD5e10b6549",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "d14e31fc-06e2-4f0f-a2f9-e6b48acf6b58",
        "name": "Access",
        "symbol": "ACS",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "29bb92f9-0020-49f6-af54-9e69f5ead9bb",
        "name": "Blur",
        "symbol": "BLUR",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x5283D291DBCF85356A21bA090E6db59121208b44",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "d609dc77-9a9e-4fd7-bcfc-2728acc578f9",
        "name": "Flare",
        "symbol": "FLR",
        "networks": [
          {
            "name": "flare",
            "display_name": "Flare",
            "contract_address": "",
            "chain_id": "14"
          }
        ]
      },
      {
        "id": "3dff392e-5818-405e-8224-553c5ae9bd2c",
        "name": "Echelon Prime",
        "symbol": "PRIME",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xb23d80f5FefcDDaa212212F028021B41DEd428CF",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c2102278-2bbe-49e1-a115-5e83bffbcead",
        "name": "Arbitrum",
        "symbol": "ARB",
        "networks": [
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0x912CE59144191C1204E64559FE8253a0e49E6548",
            "chain_id": "42161"
          }
        ]
      },
      {
        "id": "26417fbc-f542-417a-9596-5a6065b76b78",
        "name": "SUI",
        "symbol": "SUI",
        "networks": [
          {
            "name": "sui",
            "display_name": "Sui",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "d32168e6-5e00-583b-995b-f44f1a1579e4",
        "name": "Sperax",
        "symbol": "SPA",
        "networks": [
          {
            "name": "arbitrum",
            "display_name": "Arbitrum",
            "contract_address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
            "chain_id": "42161"
          }
        ]
      },
      {
        "id": "eb98bd40-6668-4ee1-aaa5-7de8155dd69f",
        "name": "Osmosis",
        "symbol": "OSMO",
        "networks": [
          {
            "name": "osmosis",
            "display_name": "Osmosis",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "e966aebc-34ac-516c-8173-bc6b1e807b8e",
        "name": "Helium",
        "symbol": "HNT",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "639886aa-61b7-44f9-a268-a1d6183a07d3",
        "name": "Arkham",
        "symbol": "ARKM",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6E2a43be0B1d33b726f0CA3b8de60b3482b8b050",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3212e00d-e1c8-5776-89d7-50551b5c42d9",
        "name": "vechain",
        "symbol": "VET",
        "networks": [
          {
            "name": "vechain",
            "display_name": "VeChain",
            "contract_address": "",
            "chain_id": "100009"
          }
        ]
      },
      {
        "id": "e7edd2ae-4098-543a-a7ca-c733404cc788",
        "name": "VeThor Token",
        "symbol": "VTHO",
        "networks": [
          {
            "name": "vechain",
            "display_name": "VeChain",
            "contract_address": "",
            "chain_id": "100009"
          }
        ]
      },
      {
        "id": "64e81cab-1cee-4950-b1fd-773efa4acfa9",
        "name": "Sei",
        "symbol": "SEI",
        "networks": [
          {
            "name": "sei",
            "display_name": "Sei",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "5b944bdc-bb99-486b-8094-cc2c50eb5884",
        "name": "Vara",
        "symbol": "VARA",
        "networks": [
          {
            "name": "vara",
            "display_name": "Vara",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "080bd13e-ebb2-4e3b-8727-fd5cd4cc7f4c",
        "name": "PayPal USD",
        "symbol": "PYUSD",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "283e4b74-7913-46ff-93f5-8a8274a910c7",
        "name": "Big Time",
        "symbol": "BIGTIME",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x64Bc2cA1Be492bE7185FAA2c8835d9b824c8a194",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "72ed7be3-3583-48df-b756-e6f1b4c940a2",
        "name": "Celestia",
        "symbol": "TIA",
        "networks": [
          {
            "name": "celestia",
            "display_name": "Celestia",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "79542a5a-65c0-42e5-bf00-f5295b1ae615",
        "name": "Jito",
        "symbol": "JTO",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "9fcf04ac-a37b-416b-8a87-a4fe5702ae41",
        "name": "Seamless",
        "symbol": "SEAM",
        "networks": [
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85",
            "chain_id": "8453"
          }
        ]
      },
      {
        "id": "4def86bf-6bf0-4cd0-9194-aa58e107d38a",
        "name": "Bonk",
        "symbol": "BONK",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "9476e3be-b731-47fa-82be-347fabc573d9",
        "name": "Aerodrome Finance",
        "symbol": "AERO",
        "networks": [
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
            "chain_id": "8453"
          }
        ]
      },
      {
        "id": "f629b825-84d1-465d-a9c1-9ba88087595a",
        "name": "Hivemapper",
        "symbol": "HONEY",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "4vMsoUT2BWatFweudnQM1xedRLfJgJ7hswhcpz4xgBTy",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "4199e1ed-1d0a-4ba1-b075-b2081704e219",
        "name": "Aleo",
        "symbol": "ALEO",
        "networks": [
          {
            "name": "aleo",
            "display_name": "Aleo",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "5defc2a7-682c-41a5-89d4-049044cc00b8",
        "name": "Velodrome Finance",
        "symbol": "VELO",
        "networks": [
          {
            "name": "optimism",
            "display_name": "Optimism",
            "contract_address": "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
            "chain_id": "10"
          }
        ]
      },
      {
        "id": "2e0cdd2a-0331-4fec-aefb-eefa25ea593a",
        "name": "Zetachain",
        "symbol": "ZETA",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xf091867EC603A6628eD83D274E835539D82e9cc8",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "3de8521a-e98d-48d9-b5ca-503549dddec8",
        "name": "Render",
        "symbol": "RENDER",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "17b77e6d-cc36-43d8-83a6-c68dcc74e3c8",
        "name": "Helium Mobile",
        "symbol": "MOBILE",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "9e813e60-2d0f-4e60-a57e-327cecab767f",
        "name": "Starknet Token",
        "symbol": "STRK",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xCa14007Eff0dB1f8135f4C25B34De49AB0d42766",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b52c2df1-06c7-5ac1-81e4-fa69b39599a2",
        "name": "Akash Network",
        "symbol": "AKT",
        "networks": [
          {
            "name": "akash",
            "display_name": "Akash",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "d107da38-6067-4ece-8419-fa87b647153e",
        "name": "Ronin",
        "symbol": "RONIN",
        "networks": [
          {
            "name": "ronin",
            "display_name": "Ronin",
            "contract_address": "",
            "chain_id": "2020"
          }
        ]
      },
      {
        "id": "ac3738c2-d051-4049-9f71-6760467b131c",
        "name": "Safe",
        "symbol": "SAFE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x5aFE3855358E112B5647B952709E6165e1c1eEEe",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "20ddf7d2-f3d7-4a65-bb95-7bab3f86b11e",
        "name": "Tensor",
        "symbol": "TNSR",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "7feef29b-ebee-427f-8a76-6f2a53cb6742",
        "name": "Neon EVM",
        "symbol": "NEON",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "NeonTjSjsuo3rexg9o6vHuMXw62f9V7zvmu8M8Zut44",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "e7f35ea9-d390-4a48-8b8c-212d52131a37",
        "name": "Shadow Token",
        "symbol": "SHDW",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "5671503a-afbe-406b-834d-94b6e9b3afc2",
        "name": "Karrat",
        "symbol": "KARRAT",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xAcd2c239012D17BEB128B0944D49015104113650",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "6dc382ef-e47e-4a6a-a370-a7836fba2571",
        "name": "Omni Network",
        "symbol": "OMNI",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x36E66fbBce51e4cD5bd3C62B637Eb411b18949D4",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "674c6343-41a8-4b79-8914-21762877e907",
        "name": "EURC",
        "symbol": "EURC",
        "networks": [
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
            "chain_id": "8453"
          },
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr",
            "chain_id": "0"
          },
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "9d9edbac-beb4-4139-8a42-565d7f910cec",
        "name": "Pirate Nation Token",
        "symbol": "PIRATE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x7613C48E0cd50E42dD9Bf0f6c235063145f6f8DC",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "b4e47296-5d36-48ef-9f6e-c61789d516fd",
        "name": "dogwifhat",
        "symbol": "WIF",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "f4249e6b-0ebc-4dd8-b897-e54c52efbcad",
        "name": "Drift Protocol",
        "symbol": "DRIFT",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "DriFtupJYLTosbwoN8koMbEYSx54aFAVLddWsbksjwg7",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "c8104d28-b0ff-425b-9f16-d7360b61008f",
        "name": "Core",
        "symbol": "CORECHAIN",
        "networks": [
          {
            "name": "coredao",
            "display_name": "Coredao",
            "contract_address": "",
            "chain_id": "1116"
          }
        ]
      },
      {
        "id": "e93ddb9d-1af8-418b-a9d4-3b048cf65331",
        "name": "Blast",
        "symbol": "BLAST",
        "networks": [
          {
            "name": "blast",
            "display_name": "Blast",
            "contract_address": "0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad",
            "chain_id": "81457"
          }
        ]
      },
      {
        "id": "30f72cc7-2197-4da5-8cf8-40e86a678ce0",
        "name": "LayerZero",
        "symbol": "ZRO",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "88a44ba5-db4a-4403-bb75-0769c4d955c4",
        "name": "Ancient8",
        "symbol": "A8",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x3E5A19c91266aD8cE2477B91585d1856B84062dF",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "2c6fffe5-5e85-48ae-9e37-fb4dc549d16c",
        "name": "Stader",
        "symbol": "SD",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x30D20208d987713f46DFD34EF128Bb16C404D10f",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "5ebf1734-ed70-4b67-9372-e938d7ede152",
        "name": "Gravity",
        "symbol": "G",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "245f9b2e-5c48-4b41-9fe7-40a0c898bbd5",
        "name": "Blocklords",
        "symbol": "LRDS",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xd0a6053f087E87a25dC60701ba6E663b1a548E85",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "32d0ed81-fd18-4d9e-9557-74ccf153f767",
        "name": "Polygon Ecosystem Token",
        "symbol": "POL",
        "networks": [
          {
            "name": "polygon",
            "display_name": "Polygon",
            "contract_address": "0x0000000000000000000000000000000000001010",
            "chain_id": "137"
          },
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x455e53CBB86018Ac2B8092FdCd39d8444aFFC3F6",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "c4e5d692-0d9d-4996-a3e7-f66d2b30e192",
        "name": "Across Protocol",
        "symbol": "ACX",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x44108f0223A3C3028F5Fe7AEC7f9bb2E66beF82F",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "dd47f029-47a9-4a1c-b379-fe4d4a8002a1",
        "name": "Pepe",
        "symbol": "PEPE",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "221b58af-dc93-4c58-b919-2c726a86c3db",
        "name": "EigenLayer",
        "symbol": "EIGEN",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "e5d89806-180a-4de7-b9a6-d248bbc571f3",
        "name": "Zetachain",
        "symbol": "ZETACHAIN",
        "networks": [
          {
            "name": "zetachain",
            "display_name": "Zetachain",
            "contract_address": "",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "0b254460-55ee-4b22-b00b-e6890060d35b",
        "name": "ZKsync",
        "symbol": "ZK",
        "networks": [
          {
            "name": "zksync",
            "display_name": "ZKsync",
            "contract_address": "0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E",
            "chain_id": "324"
          }
        ]
      },
      {
        "id": "5b6770c1-c8f3-4141-ad63-79878ee2466a",
        "name": "Moonwell",
        "symbol": "WELL",
        "networks": [
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0xA88594D404727625A9437C3f886C7643872296AE",
            "chain_id": "8453"
          }
        ]
      },
      {
        "id": "a6a6903f-abad-4b5c-931f-ca1e7d414e8d",
        "name": "CoW Protocol",
        "symbol": "COW",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0xDEf1CA1fb7FBcDC777520aa7f396b4E015F497aB",
            "chain_id": "1"
          }
        ]
      },
      {
        "id": "2f7b2bdd-984c-4858-b379-50587e6e8758",
        "name": "Degen",
        "symbol": "DEGEN",
        "networks": [
          {
            "name": "base",
            "display_name": "Base",
            "contract_address": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
            "chain_id": "8453"
          }
        ]
      },
      {
        "id": "ffa1ac28-a3ed-4cd0-a2d4-f9e17f1ebb1e",
        "name": "io.net",
        "symbol": "IO",
        "networks": [
          {
            "name": "solana",
            "display_name": "Solana",
            "contract_address": "BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K",
            "chain_id": "0"
          }
        ]
      },
      {
        "id": "83ad9d5e-fb8a-4d8c-94d7-9e87a7988acd",
        "name": "SWELL",
        "symbol": "SWELL",
        "networks": [
          {
            "name": "ethereum",
            "display_name": "Ethereum",
            "contract_address": "0x0a6E7Ba5042B38349e437ec6Db6214AEC7B35676",
            "chain_id": "1"
          }
        ]
      }
    ]
  });
  return;
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
