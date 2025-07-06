import { useEffect, useState } from 'react';
import { api } from '../ApiBase';

const useProfileMe = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/profile/me');
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

export default useProfileMe;
