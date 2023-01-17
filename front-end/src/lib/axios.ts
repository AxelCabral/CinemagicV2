import axios from "axios";

export const movieApi = axios.create({
  baseURL: "http://localhost:3333/",
});

export const userApi = axios.create({
  baseURL: "http://localhost:3332/",
});

export const salesApi = axios.create({
  baseURL: "http://localhost:3336/",
});

export const cinemaApi = axios.create({
  baseURL: "http://localhost:3337/",
});	