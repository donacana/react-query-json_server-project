import axios from "axios";

// 기본 인스턴스 생성
export const rootApi = axios.create({
    baseURL: "http://localhost:8000",
});

// 요청 인터셉터 설정 (매 요청마다 토큰 자동 추가)
rootApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});