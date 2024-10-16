export interface BuyConfig {
  countries: Country[];
}

export interface Country {
  id: string;
  name?: string;
  subdivisions: CountrySubdivision[];
  payment_methods: PaymentMethod[];
  disable_3ds_cards: boolean;
}

export type CountrySubdivision = string;

export interface PaymentMethod {
  id: string;
}
