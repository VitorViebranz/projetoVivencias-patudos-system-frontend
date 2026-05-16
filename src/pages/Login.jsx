import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { Bone, PawPrint } from "lucide-react";

function Login() {
  return (
    <div className="app-shell relative flex min-h-screen items-center justify-center overflow-hidden px-4">

      {/* BACKGROUND DECORATIVO */}
      <div className="absolute inset-0 pointer-events-none">

        <Bone
          size={180}
          className="absolute top-10 left-10 text-yellow-300 opacity-40 blur-sm rotate-12"
        />

        <PawPrint
          size={140}
          className="absolute bottom-16 right-16 text-yellow-400 opacity-40 blur-sm -rotate-12"
        />

        <PawPrint
          size={100}
          className="absolute bottom-10 left-1/4 text-yellow-200 opacity-40 blur-sm"

        />

        <Bone
          size={120}
          className="absolute top-1/3 right-1/4 text-yellow-300 opacity-40 blur-sm"
        />

      </div>

      {/* CARD */}
      <div className="surface-card relative z-10 w-full max-w-md rounded-3xl p-8">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
            <img
              src="/patudos-logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-center text-2xl font-semibold">Patudos da Rua</h1>

        <p className="mt-2 text-center text-sm text-slate-500">
          Bem-vindo outra vez. Acesse o painel de operacoes.
        </p>

        <div className="mt-6 space-y-4">
          <Input label="Usuario" placeholder="Insira seu nome..." />
          <Input label="Senha" type="password" placeholder="Insira sua senha..." />
        </div>

        <Button className="mt-6 w-full">Entrar</Button>

        <p className="mt-4 text-center text-xs text-slate-400">
          Patudos System - v1.0 (ALPHA)
        </p>
      </div>
    </div>
  );
}

export default Login;