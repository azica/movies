import axios, { AxiosInstance } from "axios";
import { baseApiUrl } from "shared/constants";

export const $api: AxiosInstance = axios.create({
    withCredentials: false,
    baseURL: baseApiUrl,
    headers: { "Content-Type": "application/json" },
});