const useFormatDate = d => {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);

  const formatedDate = `${day} ${month} ${year}, ${('0' + d.getHours()).slice(
    -2
  )}:${('0' + d.getMinutes()).slice(-2)}${d.getHours() < 12 ? 'AM' : 'PM'} `;

  return { formatedDate };
};
export default useFormatDate;
