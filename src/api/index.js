import axios from "axios";
import Constants from "expo-constants";

export const apiForecast = axios.create({
  baseURL: "http://api.weatherapi.com/v1/forecast.json",
  timeout: 1000,
});

apiForecast.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["key"] = Constants.manifest.extra.weather_api_key;

  return config;
});
