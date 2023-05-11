import ButtonSolid from "@components/Buttons/ButtonSolid";

export function CardResumoProfessor({ disciplina, formacao, tempo, turmas }: { disciplina: string, formacao: string, tempo: number, turmas: string }) {
  return (
    <div className="grid grid-cols-1 items-center max-w-sm bg-white p-4 rounded-3xl shadow-xl">
      <h2 className="text-black">Disciplina</h2>
      <span>{disciplina}</span>

      <h2 className="text-black mt-3">Formação</h2>
      <span>{formacao}</span>

      <h2 className="text-black mt-3">Tempo na Instituição</h2>
      <span>{tempo} anos</span>

      <h2 className="text-black mt-3">Turmas</h2>
      <span>{turmas}</span>
    </div>
  );
}

