import MainLayout from "@components/Layout/MainLayout";

export default function Login() {
  return (
    <div className="w-full bg-green-100 flex-1 h-[100vh]">
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="bg-[#489E5B] h-[100vh]">
          <h1 className="text-white">Login</h1>
        </div>
        <div className="grid justify-center">
          <div className="bg-[#34BB6A] p-8 rounded-3xl max-w-[480px]">
            <h1 className="text-[36px] text-white font-normal">ACESSO À PLATAFORMA</h1>
            <input type="text" placeholder="USUÁRIO" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <input type="text" placeholder="SENHA" className="w-full mt-4 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <a href="#" className="text-white hover:border-b-2 text-[14px] font-normal">ESQUECEU SEU USUÁRIO OU SENHA?</a>
          </div>
          <div className="mt-4">
            <h2 className="text-center">FAÇA SEU LOGIN UTILIZANDO TAMBÉM</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

