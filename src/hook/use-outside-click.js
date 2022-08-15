import { useEffect } from 'react';

const useOutsideClick = (ref, closeItem) => {
  useEffect(() => {
    //Alert if clicked on outside element
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeItem();
      }
    };
    //Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, closeItem]);
};

export default useOutsideClick;
