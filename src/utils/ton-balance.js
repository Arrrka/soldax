import { TonClient } from 'ton';
import { Address } from 'ton-core';

export async function getBalance(walletAddress) {
  const client = new TonClient({
    endpoint: 'https://toncenter.com/api/v2/jsonRPC',
  });

  const address = new Address(walletAddress);
  const balance = await client.getBalance(address);

  return balance;
}
