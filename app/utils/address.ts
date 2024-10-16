export const getShortAddress = (address: string) => {
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};
