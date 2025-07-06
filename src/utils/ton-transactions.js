import { Address, beginCell, toNano } from 'ton-core';

export async function sendTransaction(
  connector,
  toAddress,
  amount,
  payload = null,
) {
  if (!connector.connected) {
    throw new Error('Wallet not connected');
  }

  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 300, // 5 минут
    messages: [
      {
        address: new Address(toAddress).toString(),
        amount: toNano(amount).toString(),
        payload: payload
          ? beginCell()
              .storeStringTail(payload)
              .endCell()
              .toBoc()
              .toString('base64')
          : null,
      },
    ],
  };

  const result = await connector.sendTransaction(transaction);
  return result;
}
