import {
  Avatar,
  Badge,
  Identity,
  Name,
  Address as OnchainAddress,
} from '@coinbase/onchainkit/identity';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, useConnect, useSignMessage } from 'wagmi';
import KeyIcon from '../assets/key.svg';
import { useCoinbaseRampTransaction } from '../contexts/CoinbaseRampTransactionContext';
import { setSession } from '../queries';

interface IWalletConnectorProps {
  hideAddress?: boolean;
  hideEns?: boolean;
}
export const WalletConnector = ({
  hideAddress,
  hideEns,
}: IWalletConnectorProps) => {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors } = useConnect();

  const {
    setRampTransaction,
    rampTransaction,
    authenticated,
    setAuthenticated,
    setSigningIn,
    signingIn,
  } = useCoinbaseRampTransaction();
  const { signMessageAsync } = useSignMessage();

  useEffect(() => {
    if (authenticated && address && rampTransaction?.wallet !== address) {
      setRampTransaction({
        ...rampTransaction,
        wallet: address,
      });
    } else if (!authenticated && rampTransaction?.wallet != undefined) {
      setRampTransaction({
        ...rampTransaction,
        wallet: undefined,
      });
    }
  }, [authenticated, address, setRampTransaction, rampTransaction]);

  const connectWallet = () => {
    if (connectors.length) {
      connect({
        connector: connectors[0],
      });
    }
  };

  const login = async () => {
    try {
      setSigningIn(true);
      console.info('Logging in');
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to Coinbase Ramp.',
        uri: window.location.origin,
        version: '1',
      });

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      await setSession({ message, signature });

      setAuthenticated(true);
    } catch (err) {
      console.error('Err occurred when authenticating user', err);
    } finally {
      setSigningIn(false);
    }
  };

  const logout = () => {
    // Clear the session cookie
    document.cookie = `coinbase-ramp-demo-app-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`;
    setAuthenticated(false);
  };

  useEffect(() => {
    if (
      authenticated &&
      isConnected &&
      address &&
      rampTransaction?.wallet !== address
    ) {
      setRampTransaction({
        ...rampTransaction,
        wallet: address,
      });
    }
  }, [
    address,
    setRampTransaction,
    rampTransaction,
    isConnected,
    authenticated,
  ]);

  return (
    <div className="flex">
      {!authenticated && !isConnected ? (
        <Button
          className="m-auto"
          onClick={connectWallet}
          size="lg"
          isLoading={isConnecting}
        >
          Connect Wallet
        </Button>
      ) : !authenticated ? (
        <Button
          className="m-auto"
          onClick={login}
          size="lg"
          isLoading={signingIn}
          startContent={
            <Image alt="key" src={KeyIcon} width={24} height={24} />
          }
        >
          Sign In
        </Button>
      ) : address && isConnected ? (
        <div
          className="flex items-center cursor-pointer my-auto"
          onClick={() => logout()}
        >
          <Identity
            address={address}
            schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
          >
            <Avatar />
            {!hideEns && (
              <Name>
                <Badge />
              </Name>
            )}

            {!hideAddress && <OnchainAddress />}
          </Identity>
        </div>
      ) : null}
    </div>
  );
};
