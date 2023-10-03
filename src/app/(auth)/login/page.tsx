"use client";
import {
  Auth,
  AuthActionEnum,
  AuthContext,
  AuthContextValue,
  AuthFormContainer,
  AuthFormContainerProps,
  AuthFormDivider,
  AuthFormDividerProps,
  AuthFormOptions,
  AuthFormSuccess,
  AuthFormSuccessProps,
  AuthFormTitle,
  AuthFunction,
  AuthOptions,
  AuthParams,
  AuthProps,
  AuthProvider,
  AuthProviderProps,
  AuthStateChangeCallback,
  AuthToken,
  AuthTypeEnum,
  AuthViewOptions,
  AvailableProviders,
  DefaultUser,
  ExtraAuthOptions,
  ForgotPasswordForm,
  ForgotPasswordFormProps,
  ForgotPasswordView,
  ForgotPasswordViewProps,
  LoginButton,
  LoginView,
  MagicLinkForm,
  MagicLinkFormProps,
  OtpForm,
  OtpFormProps,
  OtpView,
  PasswordForm,
  PasswordFormProps,
  Provider,
  ProviderButton,
  Providers,
  ProvidersProps,
  SignupView,
  UpdatePasswordForm,
  UpdatePasswordFormProps,
  UpdatePasswordView,
  UpdatePasswordViewProps,
  UseLoginProps,
  User,
  VIEWS,
  useAuth,
  useCurrentUser,
  useLogin,
  useOtp,
  useResetPassword,
  useSignUp,
  useUpdatePassword,
} from "@saas-ui/auth";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FaGoogle } from "react-icons/fa";
import Logo from "@/components/ui/icons/Logo";

const svgProps = {
  fill1: "#8952e0",
  fill2: "#8952e0",
  width: "100",
  height: "100",
  viewBox: "0 0 180 180",
  // Add any other SVG props you want to change here
};

export default function AuthForm() {
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
          <AuthFormContainer>
            <LoginView
              action={"logIn"}
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
