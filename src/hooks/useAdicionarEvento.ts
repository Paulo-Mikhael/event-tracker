import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../state/atom";
import { IEvento } from "../interfaces/IEvento";

const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState(listaDeEventosState);

  return (evento: IEvento) => {
    setListaEventos(listaAntiga => [...listaAntiga, evento]);
  }
};

export default useAdicionarEvento;