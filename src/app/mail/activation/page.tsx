'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { toast } from "react-toastify";

import { checkActivationAccount } from "@/api/auth/auth";
import { CustomParagraph } from "@/components/CustomParagraph";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";

function ActivationComponent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const email = searchParams.get("email");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticateUser = async () => {
      if (code && email) {
        try {
          const resp = await checkActivationAccount({ code, email });
          console.log(resp);
          setIsAuthenticated(true);
        } catch (error) {
          toast.error(RESPONSE_MESSAGES.unknownError);
          console.error("Ошибка при аутентификации", error);
        }
      }
    };

    authenticateUser();
  }, [code, email]);

  return (
    <CustomParagraph>
      {isAuthenticated ? "Ваш почта успешно подтверждена!" : "Подтверждение..."}
    </CustomParagraph>
  );
}

export default function ActivationAccount() {
  return (
    <main>
      <Suspense fallback={<CustomParagraph>Загрузка...</CustomParagraph>}>
        <ActivationComponent />
      </Suspense>
    </main>
  );
}
