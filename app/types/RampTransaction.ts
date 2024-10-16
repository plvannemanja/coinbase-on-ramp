import { Country } from './BuyConfig';

export interface RampTransaction {
  wallet?: string;
  address?: string;
  country?: Country;
  currency?: string;
  amount?: string;
  chainToken?: string;
  paymentMethod?: string;
  provider?: string;
}
