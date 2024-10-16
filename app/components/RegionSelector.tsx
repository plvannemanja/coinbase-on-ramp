import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Skeleton,
} from '@nextui-org/react';
import { Key } from '@react-types/shared';
import { useCoinbaseRampTransaction } from '../contexts/CoinbaseRampTransactionContext';
import { useMemo } from 'react';
import Image from 'next/image';
export const RegionSelector = () => {
  const {
    countries,
    setSelectedCountry,
    selectedCountry,
    setSelectedSubdivision,
    selectedSubdivision,
    loadingBuyConfig,
  } = useCoinbaseRampTransaction();

  const subdivisions = useMemo(() => {
    if (selectedCountry) {
      return selectedCountry.subdivisions;
    }

    return [];
  }, [selectedCountry]);

  const handleCountrySelectionChange = (selectedKey: Key | null) => {
    if (selectedKey) {
      setSelectedCountry(
        countries.find((country) => country.id === selectedKey)!
      );
    }
  };

  const handleSubdivisionSelectionChange = (selectedKey: Key | null) => {
    if (selectedKey) {
      const subdivision = selectedCountry?.subdivisions.find(
        (subdivision) => subdivision === selectedKey
      );

      if (subdivision) {
        setSelectedSubdivision(subdivision);
      }
    }
  };

  return (
    <div className="flex flex-row justify-end gap-4 m-auto">
      {loadingBuyConfig ? (
        <>
          <Skeleton className="h-10 w-[200px] rounded-lg" />
          <Skeleton className="h-10 w-[150px] rounded-lg" />
        </>
      ) : (
        <>
          <Autocomplete
            isClearable={false}
            variant="underlined"
            onSelectionChange={handleCountrySelectionChange}
            className="max-w-[200px]"
            label="Select country"
            selectedKey={selectedCountry?.id}
            startContent={
              selectedCountry && (
                <Image
                  src={`https://flagcdn.com/${selectedCountry?.id.toLowerCase()}.svg`}
                  alt={selectedCountry?.id || 'selectedCountry'}
                  width={24}
                  height={24}
                />
              )
            }
          >
            {countries.map(({ id, name }) => (
              <AutocompleteItem
                key={id}
                value={id}
                startContent={
                  <Avatar
                    alt={id}
                    className="w-6 h-6"
                    src={`https://flagcdn.com/${id.toLowerCase()}.svg`}
                  />
                }
              >
                {name}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          {subdivisions.length > 0 && (
            <Autocomplete
              isClearable={false}
              variant="underlined"
              onSelectionChange={handleSubdivisionSelectionChange}
              className="max-w-[150px]"
              label="Select State/Division"
              selectedKey={selectedSubdivision}
            >
              {subdivisions.map((subdivision) => (
                <AutocompleteItem key={subdivision} value={subdivision}>
                  {subdivision}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          )}
        </>
      )}
    </div>
  );
};
