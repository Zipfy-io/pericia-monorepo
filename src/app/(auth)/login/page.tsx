"use client";
import {
  AuthFormContainer,
  AuthFormSuccess,
  LoginView,
  useLogin,
} from "@saas-ui/auth";
import { FaGoogle } from "react-icons/fa";
import Logo from "@/components/ui/icons/Logo";
import { svgProps } from "../config/svg/LogoProps";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";

const schema = z.object({
  email: z
    .string()
    .email("Por favor, insira um email válido.")
    .min(5, "O campo de email não pode estar vazio.")
    .nonempty("O campo de email não pode estar vazio.")
    .refine((emailValue) => {
      formObj.email = emailValue;
      console.log(formObj);
      return true; // Return true to indicate validation passed, or you can add your own logic here
    }),
});

const formObj = {
  email: "",
};

export default function AuthForm() {
  const [{ data, error, isLoading }, login] = useLogin();

  React.useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }

    if (isLoading) {
      console.log(isLoading);
    }
  }, [data, error, isLoading]);

  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="justify-center w-full mx-auto align-middle sm:mx-auto sm:w-full sm:max-w-sm">
          {/*add border color here */}
          <div className="flex items-center justify-center w-full h-full">
            <Logo {...svgProps} />
          </div>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Entre na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <AuthFormContainer
            onSubmit={() => {
              login(formObj);
            }}
          >
            <LoginView
              action={"logIn"}
              resolver={zodResolver(schema)}
              defaultValue={""}
              name={"email"}
              type="magiclink"
              title={""}
              noAccount={"Não tem uma conta?"}
              signupLink={"Cadastre-se"}
              providers={{
                google: {
                  icon: FaGoogle,
                  name: "Google",
                  title: "Entrar com Google",
                },
              }}
              providerLabel="Entrar com"
              dividerLabel="Ou entre com"
              style={{
                width: "100%",
                borderRadius: "8px",
                padding: "16px",
                color: "#161E2E",
              }}
              submitLabel="Entrar"
              onSuccess={() => (
                <AuthFormSuccess
                  title="Bem vindo de volta!"
                  description="Você está conectado."
                />
              )}
              renderSuccess={(props) => (
                <AuthFormSuccess
                  title="Bem vindo de volta!"
                  description="Você está conectado."
                  {...props}
                />
              )}
              footer={
                <p className="mt-10 text-sm text-center text-gray-500">
                  Ainda não é membro?{" "}
                  <a
                    href="/signup"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Cadastre-se
                  </a>
                </p>
              }
            />
          </AuthFormContainer>

          <p className="mt-5 text-sm text-center text-gray-500">
            © Entrando na plataforma eu concordo que li e aceito a política de
            cookies e privacidade.
          </p>
        </div>
      </div>
    </>
  );
}
