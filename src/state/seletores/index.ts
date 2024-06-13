import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import axios from "axios";

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
export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const respostaHttp = await axios.get<IEvento[]>('http://localhost:3000/eventos')

    return respostaHttp.data.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }));
  }
});