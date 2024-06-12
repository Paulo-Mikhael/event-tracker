import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje){
      throw new Error('A data e hora de inicio não pode ser menor que a atual');
    }

    evento.id = obterId();
    setListaEventos(listaAntiga => [...listaAntiga, evento]);
  }
};

export default useAdicionarEvento;