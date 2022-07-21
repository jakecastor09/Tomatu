import { useEffect, useState } from 'react';

const useGetData = url => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      if (!response.ok) {
        console.log('Something went wrong!');
      }
      const responseData = await response.json();
      setData(responseData);
    })();
  });
  return { data };
};

export default useGetData;
