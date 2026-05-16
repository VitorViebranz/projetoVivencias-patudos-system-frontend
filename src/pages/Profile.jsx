import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Profile() {
  return (
    <PageContainer>
      <div>
        <h1 className="text-3xl font-semibold">Perfil</h1>
        <p className="mt-1 text-sm text-slate-500">Gerencie seus dados e preferencias pessoais.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold">Informacoes pessoais</h2>
          <p className="mt-1 text-sm text-slate-500">Mantenha seus dados atualizados.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Input label="Nome" placeholder="Seu nome" />
            <Input label="Sobrenome" placeholder="Seu sobrenome" />
            <Input label="Email" type="email" placeholder="email@patudos.com" />
            <Input label="Telefone" placeholder="(00) 00000-0000" />
          </div>
          <div className="mt-6 flex justify-end">
            <Button>Salvar alteracoes</Button>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Seguranca</h2>
          <p className="mt-1 text-sm text-slate-500">Atualize sua senha de acesso.</p>
          <div className="mt-6 space-y-4">
            <Input label="Senha atual" type="password" placeholder="********" />
            <Input label="Nova senha" type="password" placeholder="********" />
            <Input label="Confirmar nova senha" type="password" placeholder="********" />
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="secondary">Atualizar senha</Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}

export default Profile;
