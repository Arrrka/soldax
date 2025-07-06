import { useEffect, useState } from 'react';
import { api } from '../ApiBase';

const useCases = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const GetCasesData = async () => {
      try {
        const response = await api.get('/Cases');
        setData(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        setError(`Ошибка: ${errorMessage}`);
        console.error('Ошибка запроса:', err);
      } finally {
        setLoading(false);
      }
    };
    GetCasesData();
  }, []);

  return { data, error, loading };
};

export default useCases;
