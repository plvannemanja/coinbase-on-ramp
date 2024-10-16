import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { TxSuccessSummaryPayload } from '../types';
import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon';
import { clearTxSuccessSummaryPayloadLocalStorageEntry } from '../utils/localStorage';

interface RampTransactionSuccessProps {
  summary?: TxSuccessSummaryPayload;
}

export const RampTransactionSuccess = ({
  summary,
}: RampTransactionSuccessProps) => {
  const performAnotherTransaction = () => {
    window.location.href = window.location.pathname;
    clearTxSuccessSummaryPayloadLocalStorageEntry();
  };

  return (
    <Card>
      <CardHeader>
        <CheckCircleIcon className="w-10 h-10 m-auto" />
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="space-y-4 text-center">
          <p className="text-lg">
            You sent {summary?.purchaseAmount}{' '}
            {summary?.purchaseCurrency.toUpperCase()}
          </p>

          <p className="text-sm opacity-50">
            Please allow up to 10 minutes for funds to be received
          </p>
        </div>

        <Button className="mt-4 bg-cb-blue" onClick={performAnotherTransaction}>
          Perform another Transaction
        </Button>
      </CardBody>
    </Card>
  );
};
