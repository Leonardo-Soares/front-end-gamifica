export function Header() {
  return (
    <div className="w-full bg-[#489E5B] flex flex-row justify-between p-6">
      <a href="/home" className="flex flex-row items-center gap-4">
        <img src="../../assets/img/logos/logo-gamifica.png" className="w-12" />
        <h1 className="font-normal uppercase text-white text-[32px]">Cadastro</h1>
      </a>

      <div className="flex items-center gap-4">
        <h2 className="text-white">Belém - PA</h2>
        <div className="bg-[#fff] rounded-full w-16 h-16 flex justify-center items-center">
          <img src="../../assets/img/example/logo-municipio.png" className="w-10" />
        </div>

        <a href="/login" className="flex flex-col items-center justify-center gap-2">
          <img className="w-10" src="../../assets/img/icons/go-back.png"/>
          <span className="text-white uppercase">Voltar</span>
        </a>
        <a href="" className="flex flex-col items-center justify-center gap-2">
          <img className="w-10" src="../../assets/img/icons/computer.png"/>
          <span className="text-white uppercase">Cadastro</span>
        </a>
        <a href="" className="flex flex-col items-center justify-center gap-2">
          <img className="w-10" src="../../assets/img/icons/trofeu.png"/>
          <span className="text-white uppercase">Ranking</span>
        </a>
        <a href="/login" className="flex flex-col items-center justify-center gap-2">
          <img className="w-10" src="../../assets/img/icons/power.png"/>
          <span className="text-white uppercase">Sair</span>
        </a>

      </div>
    </div>
  );
}

