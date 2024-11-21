'use client';
import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
} from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import OrderHistoryIcon from '../assets/orderHistory.svg';
import {
  Mode,
  useCoinbaseRampTransaction,
} from '../contexts/CoinbaseRampTransactionContext';
// import { generateBuyConfig } from '../queries';
import { AmountInput } from './AmountInput';
import { ChainTokenSelector } from './ChainTokenSelector';
import { CurrencySelector } from './CurrencySelector';
import { OrderHistory } from './OrderHistory';
import { RampTransactionSummary } from './RampTransactionSummary';
import { RegionSelector } from './RegionSelector';
import { WalletConnector } from './WalletConnector';
import config from "./config.json"
interface ICryptoRampProps {
  partnerUserId?: string;
}

export const CryptoRamp = ({ partnerUserId }: ICryptoRampProps) => {
  const [step, setStep] = useState(1);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const {
    mode,
    setMode,
    setBuyConfig,
    authenticated,
    setPartnerUserId,
    setLoadingBuyConfig,
  } = useCoinbaseRampTransaction();

  useEffect(() => {
    if (partnerUserId) {
      setPartnerUserId(partnerUserId);
    } else {
      // Check if partnerUserId exists in localStorage
      const storedPartnerId = localStorage.getItem('cb_ramp_user_id');
      if (storedPartnerId) {
        setPartnerUserId(storedPartnerId);
      } else {
        // Generate a new UUID and store it in localStorage
        const newPartnerId = crypto.randomUUID();
        localStorage.setItem('cb_ramp_user_id', newPartnerId);
        setPartnerUserId(newPartnerId);
      }
      setPartnerUserId(crypto.randomUUID());
    }
  }, [partnerUserId, setPartnerUserId]);

  useEffect(() => {
    const getBuyconfig = async () => {
      try {
        setLoadingBuyConfig(true);
        // const config = await generateBuyConfig();
        setBuyConfig(config);
        setLoadingBuyConfig(false);
      } catch (error) {
        console.error('Error generating buy config', error);
      } finally {
        setLoadingBuyConfig(false);
      }
    };

    getBuyconfig();
  }, [setBuyConfig, setLoadingBuyConfig]);

  useEffect(() => {
    if (authenticated && step < 2) {
      setStep(2);
    } else if (!authenticated && step > 1) {
      setStep(1);
    }
  }, [authenticated, step, setStep]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-950">
      <div className="crypto-ramp bg-black p-8 rounded-lg shadow-md w-full h-screen">
        <div className="flex justify-between mb-6 min-h-20 flex-col md:flex-row gap-4">
          <div className="flex gap-6 justify-center">
            <Tabs
              aria-label="Options"
              onSelectionChange={(key) => setMode(key as Mode)}
              selectedKey={mode.toLowerCase()}
            >
              <Tab key="onramp" title="Buy"></Tab>
              {/* TODO: Add offramp and enableSell Tab */}
              {/* <Tab key="offramp" title="Sell"></Tab> */}
            </Tabs>
            <div className="hidden sm:block">
              <RegionSelector />
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <WalletConnector />
            {authenticated && (
              <Image
                onClick={() => setShowOrderHistory(true)}
                className="cursor-pointer hover:opacity-50 active:opacity-30"
                src={OrderHistoryIcon}
                width={24}
                height={24}
                alt="Order History"
                aria-label="Order History"
              />
            )}
          </div>
        </div>
        <Divider />

        <div className="flex flex-col md:flex-row justify-around min-h-[750px] max-w-screen md:w-[1000px] m-auto gap-4 md:gap-0">
          <div className="bloock sm:hidden mx-auto mt-4 mb-12">
            <RegionSelector />
          </div>
          <div className="flex flex-col gap-4 grow">
            <div>
              <AmountInput />
              <div className="flex flex-col md:flex-row gap-4 items-center justify-around">
                <ChainTokenSelector />
                <CurrencySelector />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[400px]  my-8 md:my-0">
            <RampTransactionSummary />
          </div>
        </div>

        <Modal
          isOpen={showOrderHistory}
          onClose={() => setShowOrderHistory(false)}
        >
          <ModalContent className="h-[800px]">
            <div>
              <ModalHeader className="flex flex-col gap-1">
                Order History
              </ModalHeader>
              <ModalBody>
                <OrderHistory />
              </ModalBody>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
