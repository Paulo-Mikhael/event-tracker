import { useRecoilValue } from "recoil";
import { filtraEventos } from "../seletores";

const useListaDeEventos = () => {
  const setListaEventos = useRecoilValue(filtraEventos);

  return setListaEventos;
}

export default useListaDeEventos;