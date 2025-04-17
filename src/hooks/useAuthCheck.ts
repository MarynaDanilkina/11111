'use client'

import { useEffect } from "react";
import { toast } from "react-toastify";

import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";
import { useAppDispatch } from "@/store/hooks/hooks";
import { setIsUserAuth } from "@/store/slices/auth/isUserAuthSlice";
import { setUser } from "@/store/slices/user/userSlice";

export const useAuthCheck = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.isAuth) {
          dispatch(setIsUserAuth(data.isAuth));
          dispatch(setUser(data.user.data));
        }
      } catch (error) {
        toast.error(RESPONSE_MESSAGES.failedAuth);
        console.error("Ошибка проверки авторизации", error);
        dispatch(setIsUserAuth(false));
      }
    };

    checkAuth();
  }, [dispatch]);
};