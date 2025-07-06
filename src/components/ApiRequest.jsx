import { useEffect, useState } from 'react';
import axios from 'axios';
// import { api } from '../ApiTest';

const tg = window.Telegram?.WebApp;

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'TMiniApp ' + tg.initData,
  },
});

const ApiRequest = () => {
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

    const syncData = async () => {
      try {
        // Получаем initData из Telegram WebApp
        const initData = tg.initData || '';

        console.log('Telegram initData:', initData);

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

    const getCasesData = async () => {
      try {
        const response = await api.post('/Cases/open', {
          caseId: 'dd0dc658-024e-4028-9a3c-4ac1de6ae814',
        });
        setData(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        setError(`Ошибка: ${errorMessage}`);
        console.error('Ошибка запроса:', err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    syncData();
    getCasesData();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>Данные с сервера:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiRequest;
