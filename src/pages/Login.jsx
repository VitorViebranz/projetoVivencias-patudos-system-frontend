import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { Bone, PawPrint } from "lucide-react";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">

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
      <div className="bg-white p-8 rounded-2xl w-96 shadow relative z-10">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src="/patudos-logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">
          Patudos da Rua
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Bem-vindo outra vez!
        </p>

        <Input label="Usuário" placeholder="Insira seu nome..." />
        <Input label="Senha" type="password" placeholder="Insira sua senha..." />

        <Button className="w-full mt-4">Entrar</Button>

        <p className="text-center text-sm mt-4 text-gray-400">
          Patudos System - v1.0 (ALPHA)
        </p>
      </div>
    </div>
  );
}

export default Login;