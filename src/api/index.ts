interface apiType {
  [key: string]: string;
}

const getUrlApi: apiType = {
  getHomelist: "/api/article/search",
  getCitycode: "/citycodeapi/ip?parameters",
  getWeather: "/weatherapi/weather/weatherInfo?parameters",
};

const postUrlApi: apiType = {
  postHomelist: "/homelist",
  postAccount: "/acount",
};
const deleteUrlApi: apiType = {
  deleteHomelist: "/homelist",
  deletepostAccount: "/acount",
};

const patchUrlApi: apiType = {
  patchHomelist: "/homelist",
  patchAccount: "/acount",
};

export { getUrlApi, postUrlApi, deleteUrlApi, patchUrlApi };
