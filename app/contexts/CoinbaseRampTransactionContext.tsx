import isocountries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  BuyOptionsResponse,
  BuyQuoteResponse,
  PaymentCurrency,
  PaymentCurrencyLimit,
  PurchaseCurrency,
  PurchaseCurrencyNetwork,
  SellCurrency,
  SellCurrencyNetwork,
  SellOptionsResponse,
  SellQuoteResponse,
} from '../types';
import { BuyConfig, Country, CountrySubdivision } from '../types/BuyConfig';
import { RampTransaction } from '../types/RampTransaction';

isocountries.registerLocale(enLocale);
export type Mode = 'onramp' | 'offramp';
interface CoinbaseRampTransactionContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  rampTransaction: RampTransaction | null;
  setRampTransaction: (rampTransaction: Partial<RampTransaction>) => void;
  buyConfig: BuyConfig | null;
  setBuyConfig: (buyConfig: BuyConfig) => void;
  countries: Country[];
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country) => void;
  selectedSubdivision: CountrySubdivision | null;
  setSelectedSubdivision: (subdivision: CountrySubdivision) => void;
  selectedPurchaseCurrencyNetwork: PurchaseCurrencyNetwork | null;
  setSelectedPurchaseCurrencyNetwork: (
    network: PurchaseCurrencyNetwork | null
  ) => void;
  selectedPurchaseCurrency: PurchaseCurrency | null;
  setSelectedPurchaseCurrency: (
    purchaseCurrency: PurchaseCurrency | null
  ) => void;
  selectedSellCurrencyNetwork: SellCurrencyNetwork | null;
  setSelectedSellCurrencyNetwork: (network: SellCurrencyNetwork | null) => void;
  selectedSellCurrency: SellCurrency | null;
  setSelectedSellCurrency: (purchaseCurrency: SellCurrency | null) => void;
  buyOptions: BuyOptionsResponse | null;
  setBuyOptions: (buyOptions: BuyOptionsResponse | null) => void;
  sellOptions: SellOptionsResponse | null;
  setSellOptions: (buyOptions: SellOptionsResponse | null) => void;
  selectedPaymentMethod: PaymentCurrencyLimit | null;
  setSelectedPaymentMethod: (
    paymentMethod: PaymentCurrencyLimit | null
  ) => void;
  secureToken: string | null;
  setSecureToken: (secureToken: string | null) => void;
  buyQuote: BuyQuoteResponse | null;
  setBuyQuote: (buyQuote: BuyQuoteResponse | null) => void;
  sellQuote: SellQuoteResponse | null;
  setSellQuote: (buyQuote: SellQuoteResponse | null) => void;
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  selectedCurrency: PaymentCurrency | null;
  setSelectedCurrency: (currency: PaymentCurrency | null) => void;
  partnerUserId: string | null;
  setPartnerUserId: (partnerUserId: string | null) => void;
  signingIn: boolean;
  setSigningIn: (signingIn: boolean) => void;
  loadingBuyConfig: boolean;
  setLoadingBuyConfig: (loadingBuyConfig: boolean) => void;
  loadingBuyOptions: boolean;
  setLoadingBuyOptions: (loadingBuyOptions: boolean) => void;
  loadingSellOptions: boolean;
  setLoadingSellOptions: (loadingSellOptions: boolean) => void;
  isOnrampActive: boolean;
  isOfframpActive: boolean;
}

const CoinbaseRampTransactionContext = createContext<
  CoinbaseRampTransactionContextType | undefined
>(undefined);

export const CoinbaseRampTransactionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [rampTransaction, setRampTransaction] =
    useState<RampTransaction | null>({
      amount: '0',
    });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [buyConfig, setBuyConfig] = useState<BuyConfig | null>(null);
  const [selectedSubdivision, setSelectedSubdivision] =
    useState<CountrySubdivision | null>(null);
  const [selectedPurchaseCurrencyNetwork, setSelectedPurchaseCurrencyNetwork] =
    useState<PurchaseCurrencyNetwork | null>(null);
  const [selectedPurchaseCurrency, setSelectedPurchaseCurrency] =
    useState<PurchaseCurrency | null>(null);
  const [selectedSellCurrencyNetwork, setSelectedSellCurrencyNetwork] =
    useState<PurchaseCurrencyNetwork | null>(null);
  const [selectedSellCurrency, setSelectedSellCurrency] =
    useState<PurchaseCurrency | null>(null);
  const [buyOptions, setBuyOptions] = useState<BuyOptionsResponse | null>(null);
  const [sellOptions, setSellOptions] = useState<SellOptionsResponse | null>(
    null
  );
  const [mode, setMode] = useState<Mode>('onramp');
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentCurrencyLimit | null>(null);
  const [secureToken, setSecureToken] = useState<string | null>(null);
  const [buyQuote, setBuyQuote] = useState<BuyQuoteResponse | null>(null);
  const [sellQuote, setSellQuote] = useState<SellQuoteResponse | null>(null);
  const [loadingBuyOptions, setLoadingBuyOptions] = useState(false);
  const [loadingSellOptions, setLoadingSellOptions] = useState(false);
  const countries = useMemo<Country[]>(() => {
    return (
      buyConfig?.countries.map(
        ({ id, subdivisions, payment_methods, disable_3ds_cards }) => ({
          id,
          name: isocountries.getName(id, 'en'),
          subdivisions,
          payment_methods,
          disable_3ds_cards,
        })
      ) || []
    );
  }, [buyConfig]);
  const [selectedCurrency, setSelectedCurrency] =
    useState<PaymentCurrency | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [partnerUserId, setPartnerUserId] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);
  const [loadingBuyConfig, setLoadingBuyConfig] = useState(false);
  const isOnrampActive = useMemo(() => mode === 'onramp', [mode]);
  const isOfframpActive = useMemo(() => mode === 'offramp', [mode]);

  const handleSetRampTransaction = (
    rampTransactionUpdate: Partial<RampTransaction>
  ) => {
    setRampTransaction({ ...rampTransaction, ...rampTransactionUpdate });
  };

  const handleSetSelectedCountry = (country: Country) => {
    setSelectedCountry(country);
    setRampTransaction({ ...rampTransaction, country: country });
  };

  useEffect(() => {
    if (isOfframpActive) {
      if (!selectedSellCurrency && sellOptions) {
        let defaultSellCurrency = sellOptions.sell_currencies.find(
          (currency) => currency.symbol.toUpperCase() === 'USDC'
        );

        if (!defaultSellCurrency)
          defaultSellCurrency = sellOptions.sell_currencies[0];

        setSelectedSellCurrency(defaultSellCurrency);

        if (defaultSellCurrency) {
          const defaultNetwork = defaultSellCurrency.networks.find(
            (network) => network.chain_id == '8453'
          );

          if (defaultNetwork) {
            setSelectedSellCurrencyNetwork(defaultNetwork);
          } else {
            setSelectedPurchaseCurrencyNetwork(defaultSellCurrency.networks[0]);
          }
        }
      }

      let defaultCurrency = sellOptions?.cashout_currencies.find(
        (currency) => currency.id.toUpperCase() === 'USD'
      );

      if (!defaultCurrency) {
        defaultCurrency = sellOptions?.cashout_currencies[0];
      }

      if (defaultCurrency) {
        setRampTransaction({
          ...rampTransaction,
          currency: defaultCurrency.id,
          paymentMethod: defaultCurrency.limits[0].id,
        });
        setSelectedCurrency(defaultCurrency);
        setSelectedPaymentMethod(defaultCurrency.limits[0]);
      }
    }
  }, [isOfframpActive]);

  const setDefaultPaymentCurrencyInOnrampMode = () => {
    let defaultCurrency = buyOptions?.payment_currencies.find(
      (currency) => currency.id.toUpperCase() === 'USD'
    );

    if (!defaultCurrency) {
      defaultCurrency = buyOptions?.payment_currencies[0];
    }

    if (defaultCurrency) {
      setRampTransaction({
        ...rampTransaction,
        currency: defaultCurrency.id,
        paymentMethod: defaultCurrency.limits[0].id,
      });
      setSelectedCurrency(defaultCurrency);
      setSelectedPaymentMethod(defaultCurrency.limits[0]);
    }
  };

  useEffect(() => {
    if (isOnrampActive) {
      setDefaultPaymentCurrencyInOnrampMode();
    }
  }, [isOnrampActive]);

  useEffect(() => {
    // Setup default settings

    // Select default country
    if (!selectedCountry && countries.length) {
      // Setup default settings only once
      const defaultCountry = countries.find((country) => country.id === 'US');

      if (defaultCountry) {
        setSelectedCountry(defaultCountry);
        setRampTransaction({ ...rampTransaction, country: defaultCountry });

        const defaultSubdivision = defaultCountry.subdivisions.find(
          (subdivision) => subdivision === 'CA'
        );
        if (defaultSubdivision) {
          setSelectedSubdivision(defaultSubdivision);
        }
      } else {
        setSelectedCountry(countries[0]);
        if (countries[0].subdivisions.length) {
          setSelectedSubdivision(countries[0].subdivisions[0]);
        }
      }
    }

    // Select default purchase currency
    if (!selectedPurchaseCurrency && buyOptions) {
      let defaultPurchaseCurrency = buyOptions.purchase_currencies.find(
        (currency) => currency.symbol.toUpperCase() === 'USDC'
      );

      if (!defaultPurchaseCurrency) {
        defaultPurchaseCurrency = buyOptions.purchase_currencies[0];
      }

      setSelectedPurchaseCurrency(defaultPurchaseCurrency);
      if (defaultPurchaseCurrency) {
        // Select 'base' as the default network
        const defaultNetwork = defaultPurchaseCurrency.networks.find(
          (network) => network.chain_id == '8453'
        );

        if (defaultNetwork) {
          setSelectedPurchaseCurrencyNetwork(defaultNetwork);
        } else {
          setSelectedPurchaseCurrencyNetwork(
            defaultPurchaseCurrency.networks[0]
          );
        }
      }

      if (!rampTransaction?.currency) {
        setDefaultPaymentCurrencyInOnrampMode();
      }
    }
  }, [
    countries,
    selectedCountry,
    buyOptions,
    selectedPurchaseCurrency,
    selectedPurchaseCurrencyNetwork,
    rampTransaction,
  ]);

  const contextValue: CoinbaseRampTransactionContextType = {
    mode,
    setMode,
    rampTransaction,
    setRampTransaction: handleSetRampTransaction,
    buyConfig,
    setBuyConfig,
    countries,
    selectedCountry,
    setSelectedCountry: handleSetSelectedCountry,
    selectedSubdivision,
    setSelectedSubdivision,
    selectedPurchaseCurrencyNetwork,
    setSelectedPurchaseCurrencyNetwork,
    selectedPurchaseCurrency,
    setSelectedPurchaseCurrency,
    buyOptions,
    setBuyOptions,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    secureToken,
    setSecureToken,
    buyQuote,
    setBuyQuote,
    authenticated,
    setAuthenticated,
    selectedCurrency,
    setSelectedCurrency,
    partnerUserId,
    setPartnerUserId,
    signingIn,
    setSigningIn,
    loadingBuyConfig,
    setLoadingBuyConfig,
    loadingBuyOptions,
    setLoadingBuyOptions,
    loadingSellOptions,
    setLoadingSellOptions,
    sellOptions,
    setSellOptions,
    selectedSellCurrency,
    setSelectedSellCurrency,
    selectedSellCurrencyNetwork,
    setSelectedSellCurrencyNetwork,
    sellQuote,
    setSellQuote,
    isOnrampActive,
    isOfframpActive,
  };
  return (
    <CoinbaseRampTransactionContext.Provider value={contextValue}>
      {children}
    </CoinbaseRampTransactionContext.Provider>
  );
};

export const useCoinbaseRampTransaction = () => {
  const context = useContext(CoinbaseRampTransactionContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
