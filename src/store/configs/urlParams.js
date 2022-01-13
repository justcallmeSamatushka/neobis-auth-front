export const getUrl = (url, params) => {
  let keys = Object.keys(params);
  keys.forEach(key => {
    url = url.replace(':' + key, params[key]);
  });
  return url
}