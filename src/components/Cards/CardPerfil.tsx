import ButtonSolid from "@components/Buttons/ButtonSolid";

export function CardPerfil({ clickPerfil, clickfoto, avatar, nome, cargo }: { clickPerfil: any, clickfoto: any, avatar: string, nome: string, cargo: string }) {
  return (
    <div className="grid grid-cols-2 items-center max-w-sm">
      <div className="p-4 relative">
        <div className="border-8 border-[#489E5B] rounded-full h-40 w-40">
          <img className="w-36 h-36" src={avatar} />
          <a href={clickfoto} className="absolute bottom-0 right-[60px] h-12 w-12 items-center justify-center flex bg-[#489E5B] text-white rounded-full">
            <img src="../../../assets/img/icons/camera.png" />
          </a>
        </div>
      </div>
      <div className="">
        <span>{cargo}</span>
        <h2 className="text-[#353535] text-[24px] mb-4">{nome}</h2>
        <ButtonSolid link={clickPerfil} name="Alterar Dados" color={'#fff'} />
      </div>
    </div>
  );
}

