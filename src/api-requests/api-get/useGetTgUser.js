import { useEffect, useState } from 'react';
import { api } from '../ApiBase';

const useTgUser = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/telegram/user');
        setData(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        setError(`Ошибка: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useTgUser;
