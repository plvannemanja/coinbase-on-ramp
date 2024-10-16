import { useEffect } from 'react';
import { useCoinbaseRampTransaction } from '../contexts/CoinbaseRampTransactionContext';
import { getOrdersByPartnerUserId } from '../queries';

export const OrderHistory = () => {
  const { partnerUserId } = useCoinbaseRampTransaction();

  useEffect(() => {
    const getOrders = async () => {
      if (partnerUserId) {
        const orders = await getOrdersByPartnerUserId({
          partnerUserId,
        });
        console.info('orders by partner user id', orders);
      }
    };

    getOrders();
  }, [partnerUserId]);

  return (
    <div className="order-history w-full">
      <h1>Order History</h1>
    </div>
  );
};
