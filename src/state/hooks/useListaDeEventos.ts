import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useListaDeEventos = () => {
  const setListaEventos = useRecoilValue(listaDeEventosState);

  return setListaEventos;
}

export default useListaDeEventos;