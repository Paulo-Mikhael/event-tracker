import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    return setListaEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(item => item.id === evento.id);
      return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)];
    });
  }
}

export default useAtualizarEvento;