import axios from 'axios';

const tg = window.Telegram?.WebApp;

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'TMiniApp ' + tg.initData,
  },
});
