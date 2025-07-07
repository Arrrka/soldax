import { useEffect, useState } from 'react';
import FullWidthTonButton from './FullWidthTonButton';

export default function SafeTonButtonWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <FullWidthTonButton />;
}
