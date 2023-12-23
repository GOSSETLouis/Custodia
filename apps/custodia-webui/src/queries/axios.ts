import axios from "axios";

export const baseAxios = axios.create({
  // eslint-disable-next-line no-warning-comments
  // TODO : baseURL: import.meta.env.VITE_API_URL,
  baseURL: "https://api-custodia.custodia-workspace.dev",
});
