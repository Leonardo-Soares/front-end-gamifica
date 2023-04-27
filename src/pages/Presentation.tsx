import ButtonOutline from "@components/Buttons/ButtonOutline";
import ButtonSolid from "@components/Buttons/ButtonSolid";

export default function Presentation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-100">
      <h1>teste</h1>
     

      <ButtonSolid onPress={() => { }} title="Clique aqui para mais informações" color="#fff" backgroundColor={'#489E5B'}  />
    </div>
  );
}

