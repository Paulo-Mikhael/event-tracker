import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const filtraEventos = selector({
  key: 'filtraEventos',
  get: ({ get }) => {
    const todosOsEventos = get(listaDeEventosState);
    const filtro = get(filtroDeEventos);

    const eventos = todosOsEventos.filter(evento => {
    if (!filtro.data){
      return true;
    }
      const eventoPego = evento.inicio.toISOString().slice(0, 10) === filtro.data.toISOString().slice(0, 10);
      return eventoPego;
    });

    return eventos;
  }
});