import { toast } from "react-toastify";

import { API_PATHS } from "@/api/API_PATHS";

interface ITelegramUserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

const useTelegramAuth = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const startTelegramAuth = () => {
    if (typeof window === "undefined") return;

    const oldScript = document.querySelector('script[data-telegram-login]');
    if (oldScript) {
      oldScript.remove();
    }

    (window as any).TelegramLoginWidget = {

      // todo Сделать запрос на получение токенов и сет их в cookies
      dataOnauth: async (userData: ITelegramUserData) => {
        console.log("TelegramLoginWidget", userData);
        try {
          const res = await fetch(`${baseURL}${API_PATHS.auth.telegramLogin}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
            credentials: "include",
          });

          const data = await res.json();
          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            toast.success("Успешный вход через Telegram!");
          } else {
            toast.error("Ошибка авторизации через Telegram");
          }
        } catch (error) {
          toast.error("Ошибка подключения к серверу");
          console.error(error)
        }
      },
    };

    // Вставляем Telegram-виджет при клике
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?7";
    script.async = true;
    script.setAttribute("data-telegram-login", "auth_nixbuy_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-request-access", "write");

    document.body.appendChild(script);
  };

  return { startTelegramAuth };
};

export default useTelegramAuth;
