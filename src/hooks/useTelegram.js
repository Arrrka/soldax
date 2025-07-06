import { useEffect } from 'react';

export const useTelegram = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Раскрываем приложение на весь экран
    tg.enableClosingConfirmation(); // Подтверждение при закрытии

    return () => {
      tg.disableClosingConfirmation();
    };
  }, []);
};
