"use client";
import { AuthFormSuccess, SignupView } from "@saas-ui/auth";

import { FaGoogle } from "react-icons/fa";
import Logo from "@/components/ui/icons/Logo";
import { svgProps } from "../config/svg/LogoProps";

import { useRouter } from "next/navigation";
import React from "react";

export default function AuthForm() {
  const router = useRouter();

  const [time, setTime] = React.useState(3);

  const redirectOnSuccess = () => {
    setTimeout(() => {
      router.push("/verifymail");
    }, 3000);

    setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="justify-center w-full mx-auto align-middle sm:mx-auto sm:w-full sm:max-w-sm">
          {/*add border color here */}
          <div className="flex items-center justify-center w-full h-full">
            <Logo {...svgProps} />
          </div>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Cadastre-se
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignupView
            title={""}
            noAccount={"Não tem uma conta?"}
            signupLink={"Cadastre-se"}
            providers={{
              google: {
                icon: FaGoogle,
                name: "Google",
                title: "Cadastre-se com Google",
              },
            }}
            providerLabel="Cadastre-se com"
            dividerLabel="Ou cadastre-se com"
            style={{
              width: "100%",
              borderRadius: "8px",
              padding: "16px",
              color: "#161E2E",
            }}
            submitLabel="Cadastre-se"
            onSuccess={() => {
              console.log("success");
              redirectOnSuccess();
            }}
            renderSuccess={(props) => (
              <AuthFormSuccess
                title="Parabéns! Você está quase lá 🎉"
                description={`Verifique seu email para finalizar seu cadastro. -> ${time}s`}
                {...props}
              />
            )}
            footer={
              <p className="mt-10 text-sm text-center text-gray-500">
                Ainda não é membro?{" "}
                <button
                  onClick={() => router.push("/login")}
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Entrar
                </button>
              </p>
            }
          />
          <p className="mt-5 text-sm text-center text-gray-500">
            © Entrando na plataforma eu concordo que li e aceito a política de
            cookies e privacidade.
          </p>
        </div>
      </div>
    </>
  );
}
