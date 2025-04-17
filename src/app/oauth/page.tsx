'use client'

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { toast } from "react-toastify";

import { checkLogin } from "@/api/auth/auth";
import { refreshAccessToken, setServerToken } from "@/api/token/token";
import { CustomParagraph } from "@/components/CustomParagraph";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";
import { useAppDispatch } from "@/store/hooks/hooks";
import { setIsUserAuth } from "@/store/slices/auth/isUserAuthSlice";
import { setUser } from "@/store/slices/user/userSlice";

function OathComponent() {
  const searchParams = useSearchParams();
  const refreshToken = searchParams.get("token");
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authenticateUser = async () => {
      if (!refreshToken) return;

      try {
        const resRefreshAccessToken = await refreshAccessToken(refreshToken);
        const newAccessToken = resRefreshAccessToken?.data?.accessToken;

        const setTokenResp = await setServerToken({
          accessToken: newAccessToken,
          refreshToken: refreshToken,
        });

        if (setTokenResp.status !== 200) {
          throw new Error(
            `Failed to set server tokens. Status: ${setTokenResp.status}`
          );
        }

        const resCheckAuth = await checkLogin(newAccessToken);

        if (resCheckAuth?.data.ok) {
          dispatch(setUser(resCheckAuth.data.data));
          dispatch(setIsUserAuth(true));
          setIsAuthenticated(true);

          setTimeout(() => {
            router.push("/");
          }, 1000);

        } else {
          throw new Error("Ошибка проверки авторизации пользователя");
          toast.error(RESPONSE_MESSAGES.failedAuth);
        }

      } catch (error) {
        toast.error(RESPONSE_MESSAGES.unknownError);
        console.error("Ошибка при аутентификации", error);
      }
    };

    authenticateUser();
  }, [refreshToken, dispatch]);

  return (
    <CustomParagraph>
      {isAuthenticated ? "Вы успешно авторизованы! Перенаправление..." : "Авторизация..."}
    </CustomParagraph>
  );
}

export default function Oath() {
  return (
    <main>
      <Suspense fallback={<CustomParagraph>Загрузка...</CustomParagraph>}>
        <OathComponent />
      </Suspense>
    </main>
  );
}
