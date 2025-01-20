"use client";

import { FC, useState } from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { LoginForm } from "./form/login-form";
import { RegisterForm } from "./form/register-form";

interface Props {}

const TestQuestionsAuth: FC<Props> = ({}) => {
  const [type, setType] = useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };

  return (
    <div className="max-w-[900px] mt-[30px]">
      {" "}
      <h1 className="text-[30px] mb-[10px]">
        Для продолжения необходимо авторизоваться
      </h1>
      {type === "login" ? <LoginForm /> : <RegisterForm />}
      <hr className="my-5" />
      <div className="flex gap-2 my-3">
        <Button
          variant="outline"
          onClick={() =>
            signIn("yandex", {
              // callbackUrl: "/",
              redirect: false,
            })
          }
          type="button"
          className="gap-2 h-12 p-2 flex-1 border-white text-white"
        >
          <img
            className="w-6 h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Yandex_Browser_logo.svg/1024px-Yandex_Browser_logo.svg.png"
          />
          Yandex
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
              redirect: true,
            })
          }
          type="button"
          className="gap-2 h-12 p-2 flex-1 border-white text-white"
        >
          <img
            className="w-6 h-6"
            src="https://storage.yandexcloud.net/ds-ods/files/media/hub/icon/170957ff3ff5/sber.png"
          />
          Sber ID
        </Button>
      </div>
      <Button
        variant="outline"
        onClick={onSwitchType}
        type="button"
        className="h-12 w-[100%] border-white text-white"
      >
        {type !== "login" ? "Войти" : "Регистрация"}
      </Button>
    </div>
  );
};

export default TestQuestionsAuth;
