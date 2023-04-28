export default function Login() {
  return (
    <div className="w-full bg-green-100 my-4 md:my-0 flex-1 h-[100vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="bg-[#489E5B] h-[100vh]  order-1  md:order-0 relative">
          <div className="grid grid-cols-2 mx-4 my-4">
            <img src="../../assets/img/logos/logo-gamifica.png" className="w-24" />
            <h2 className="text-white font-normal text-end text-3xl">Plataforma de Gamificação para a educação</h2>
          </div>
          <div className="w-full flex justify-center">
            <img src="../../assets/img/figuras/menino-login.png" className="w-80 md:w-[420px] lg:w-[540px] absolute bottom-0 left-4 z-10" />
            <img src="../../assets/img/figuras/livros-escolares.png" className="w-100 absolute bottom-0 left-4" />
          </div>
        </div>
        <div className="grid justify-center order-0 md:order-1 px-4">
          <div className="bg-[#34BB6A] p-8 rounded-3xl  max-w-[440px]">
            <div className="w-full flex justify-center">
              <h1 className="text-[32px] text-center text-white font-semibold w-[200px]">ACESSO À PLATAFORMA</h1>
            </div>
            <input type="text" placeholder="USUÁRIO" className="px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <input type="text" placeholder="SENHA" className="mt-4 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <div className="w-full flex justify-end mt-2">
              <a href="#" className="text-white hover:border-b-2 text-[14px] font-normal">ESQUECEU SEU USUÁRIO OU SENHA?</a>
            </div>
            <div className="block md:flex text-center justify-center gap-4 my-4">
              <button onClick={() => { }} className="bg-[#FFF] my-2 px-8 py-4 rounded-3xl text-[#01DF5A] hover:bg-[#01DF5A] hover:text-[#fff]" >
                ACESSAR
              </button>
              <button onClick={() => { }} className="bg-[#01DF5A] my-2 px-8 py-4 rounded-3xl text-white hover:bg-[#fff] hover:text-[#01DF5A]" >
                FAÇA UM TESTE
              </button>
            </div>

          </div>
          <div className="mt-4">
            <h2 className="text-center">FAÇA SEU LOGIN UTILIZANDO TAMBÉM</h2>

            <div className="flex justify-center gap-4 mt-4 mb-4">
              <button className="bg-transparent flex gap-3 border-[#E3362B] border-2 px-8 py-4 rounded-full text-[#E3362B] hover:bg-[#fff] hover:text-[#E3362B]">
                <img src={'../../assets/img/google.png'} className='h-[24px]' />
                GOOGLE
              </button>
              <button className="bg-transparent flex gap-3 border-[#2B80E3] border-2 px-8 py-4 rounded-full text-[#2B80E3] hover:bg-[#fff] hover:text-[#2B80E3]">
                <img src={'../../assets/img/facebook.png'} className='h-[24px]' />
                GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

