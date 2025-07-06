const useMultiApiCheck = (apiResults) => {
  const isLoading = apiResults.some((res) => res.loading);
  const error = apiResults.find((res) => res.error)?.error;
  const hasData = apiResults.every(
    (res) =>
      res.data &&
      typeof res.data === 'object' &&
      Object.keys(res.data).length > 0,
  );

  return {
    status: isLoading
      ? 'loading'
      : error
        ? 'error'
        : !hasData
          ? 'no-data'
          : 'success',
    error,
    data: hasData ? apiResults.map((res) => res.data) : null,
  };
};

export default useMultiApiCheck;
