import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.25.200.58:3333"
})