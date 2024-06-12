import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../state/atom";
import { IEvento } from "../interfaces/IEvento";

const useExcluirEvento = () => {
  const setListaEventos = useSetRecoilState(listaDeEventosState);

  return (evento: IEvento) => {
    setListaEventos(listaAntiga => listaAntiga.filter(item => item.id !== evento.id));
  }
};

export default useExcluirEvento;