import { useTonConnect } from '../hooks/useTonConnect';

export const TonAuth = () => {
  const { connect, disconnect, connected, wallet } = useTonConnect();

  return (
    <div>
      {!connected ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected: {wallet}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      )}
    </div>
  );
};
