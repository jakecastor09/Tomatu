const useNameConvertToRouterLink = name => {
  const routerLinkName = '/' + name.toLowerCase().replace(' ', '-');
  return routerLinkName;
};

export default useNameConvertToRouterLink;
