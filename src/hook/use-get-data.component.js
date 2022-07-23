import { useEffect, useState } from 'react';

const useGetData = url => {
  const fetchData = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      console.log('Something went wrong!');
    }
    const responseData = await response.json();

    return responseData;
  };

  return { fetchData };
};

export default useGetData;
