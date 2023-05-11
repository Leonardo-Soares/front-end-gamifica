import ButtonOutline from "@components/Buttons/ButtonOutline";
import ButtonSolid from "@components/Buttons/ButtonSolid";
import { CardPerfil } from "@components/Cards/CardPerfil";
import { CardResumoProfessor } from "@components/Cards/CardResumoProfessor";

export default function Presentation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-100">
      <div className="container">
        <CardPerfil
          clickfoto={'#'}
          clickPerfil={'#'}
          cargo="Professor"
          nome="Lauro Sérgio"
          avatar="../../../assets/img/example/professor.png"
        />
        <CardResumoProfessor
          tempo={5}
          turmas="9B, 7C, 5A, 8A"
          disciplina="Matemática"
          formacao="Pós Graduação em Matemática"
        />
      </div>
    </div>
  );
}

