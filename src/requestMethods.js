import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODczNzlmZTU5Yjg0ZWI3NTlmY2M2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDAxMzAxOSwiZXhwIjoxNjU0MjcyMjE5fQ.t7FP0MxKp2_NgRu1mi8a9rfA0D2jKa7S75oe0beZZv4"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
