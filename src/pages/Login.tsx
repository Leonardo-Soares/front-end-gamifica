import ButtonSolid from "@components/Buttons/ButtonSolid";
import ButtonOutImage from "@components/Buttons/ButtonOutImage";

export default function Login() {
  return (
    <div className="w-full bg-green-100 flex-1 h-[100vh]">
      <div className="grid h-[100vh] grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="bg-[#489E5B] h-[100vh] hidden md:grid order-1 md:order-0 relative">
          <div className="grid grid-cols-2 mx-4 my-4">
            <img src="../../assets/img/logos/logo-gamifica.png" className="w-24" />
            <h2 className="text-white font-normal text-end text-[38px] leading-9">Plataforma de Gamificação para a educação</h2>
          </div>
          <div className="w-full flex justify-center">
            <img src="../../assets/img/figuras/menino-login.png" className="w-[94%] md:w-[420px] lg:w-[540px] absolute bottom-0 left-4 z-10" />
            <img src="../../assets/img/figuras/livros-escolares.png" className="w-[94%] absolute bottom-0 left-4" />
          </div>
        </div>
        <div className="grid justify-center order-0 md:order-1 px-4">
          <div className="bg-[#34BB6A] p-8 my-4 rounded-3xl  max-w-[440px] z-20">
            <div className="w-full flex justify-center">
              <h1 className="text-[32px] text-center text-white font-semibold w-[200px] leading-10">ACESSO À PLATAFORMA</h1>
            </div>
            <input type="text" placeholder="USUÁRIO" className="mt-4 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <input type="text" placeholder="SENHA" className="mt-4 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <div className="w-full flex justify-end mt-2">
              <a href="#" className="text-white hover:border-b-2 text-[14px] font-normal">ESQUECEU SEU USUÁRIO OU SENHA?</a>
            </div>

            <div className="block md:flex text-center justify-center gap-4 my-4">
              <ButtonSolid
                link="#"
                name="ACESSAR"
                color="#01DF5A"
                backgrtound={'#fff'}
              />
              <ButtonSolid
                link="#"
                name="FAÇA UM TESTE"
                color="#fff"
                backgrtound={'#01DF5A'}
              />
            </div>

          </div>
          <div className="mt-4 z-20">
            <h2 className="text-center">FAÇA SEU LOGIN UTILIZANDO TAMBÉM</h2>

            <div className="flex justify-center gap-4 mt-4 mb-4">
              <ButtonOutImage
                link="#"
                name="GOOGLE"
                color="#E3362B"
                border={'#E3362B'}
                imagemIcon={'../../assets/img/icons/google.png'}
              />
              <ButtonOutImage
                link="#"
                name="FACEBOOK"
                color="#2B80E3"
                border={'#2B80E3'}
                imagemIcon={'../../assets/img/icons/facebook.png'}
              />
            </div>
          </div>
          <img  src="../../assets/img/figuras/aviao.png" className="absolute left-[49%] top-[16%]" />
          <img  src="../../assets/img/figuras/numero-1.png" className="absolute top-[4%]" />
          <img  src="../../assets/img/figuras/trofeu.png" className="absolute top-[36%] right-[42%]" />
          <img  src="../../assets/img/figuras/medalha.png" className="absolute top-0 right-[28%]" />
          <img  src="../../assets/img/figuras/book.png" className="absolute top-[4%] right-[16%]" />
          <img  src="../../assets/img/figuras/score.png" className="absolute top-[4%] right-[3%]" />
          <img  src="../../assets/img/figuras/mochila.png" className="absolute bottom-[0%] right-[0%] hidden md:flex" />
          <img  src="../../assets/img/figuras/regua.png" className="absolute bottom-[0%] right-[45%] hidden md:flex" />
        </div>
      </div>
    </div>
  );
}

