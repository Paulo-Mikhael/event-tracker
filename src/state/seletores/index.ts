import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const filtraEventos = selector({
  key: 'filtraEventos',
  get: ({ get }) => {
    const todosOsEventos = get(listaDeEventosState);
    const filtro = get(filtroDeEventos);

    const eventos = todosOsEventos.filter(evento => {
      const filtrarPorData = filtro.data ? evento.inicio.toISOString().slice(0, 10) === filtro.data.toISOString().slice(0, 10) : true;
      const filtrarPorSituacao = filtro.situacao !== null ? evento.completo === filtro.situacao : true;

      return filtrarPorData && filtrarPorSituacao;
    });

    return eventos;
  }
});