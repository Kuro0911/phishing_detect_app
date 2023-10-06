import axios from "axios";

export const serverUrl = `https://eaee-35-199-31-164.ngrok-free.app/`;
export let api = axios.create({
  baseURL: serverUrl,
});

export const PREDICT_URL = "predict";

export const get_predictions = (new_data) => {
  const request = api.post(PREDICT_URL, new_data);
  return request;
};
