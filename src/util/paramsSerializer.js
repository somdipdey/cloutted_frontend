const paramSerializer = (params) =>
  Object.entries(Object.assign({}, params))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

export default paramSerializer;
