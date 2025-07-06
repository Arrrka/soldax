import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import { api } from './ApiBase';

const ApiSync = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg && !import.meta.env.DEV) {
      setError('Запустите приложение через Telegram');
      setLoading(false);
      return;
    }

    const SyncData = async () => {
      try {
        // Получаем initData из Telegram WebApp
        const initData = tg.initData || '';

        const response = await api.post('/profile/sync');

        setData(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        setError(`Ошибка: ${errorMessage}`);
        console.error('Ошибка запроса:', err);
      } finally {
        setLoading(false);
      }
    };

    SyncData();
  }, []);

  if (loading) {
    return <Spin fullscreen />;
  }
  if (error) {
    return <div>{error}</div>;
  }
};

export default ApiSync;
