import { useEffect } from 'react';
import { useTonConnect } from '../hooks/useTonConnect';

export const useTelegramTON = () => {
  const { connect, connected } = useTonConnect();
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    if (tg.initDataUnsafe?.start_param) {
      // Обработка deep link с реферальным кодом
      console.log('Start param:', tg.initDataUnsafe.start_param);
    }

    tg.onEvent('themeChanged', () => {
      document.body.classList.toggle('dark', tg.colorScheme === 'dark');
    });
  }, [tg]);

  useEffect(() => {
    if (connected) {
      tg.MainButton.setText('Payment with TON');
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [connected, tg]);
};
