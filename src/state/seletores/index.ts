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
  get: () => {
    return [
      {
        "descricao": "Estudar React",
        "inicio": new Date("2022-01-15T09:00"),
        "fim": new Date("2022-01-15T13:00"),
        "completo": false,
        "id": 100
      },
      {
        "descricao": "Estudar Recoil",
        "inicio": new Date("2022-01-16T09:00"),
        "fim": new Date("2022-01-16T11:00"),
        "completo": false,
        "id": 101
      },
      {
        "descricao": "Estudar C#",
        "inicio": new Date("2024-06-16T09:00"),
        "fim": new Date("2024-06-16T11:00"),
        "completo": false,
        "id": 102
      },
      {
        "descricao": "Estudar Angular",
        "inicio": new Date("2024-06-13T09:00"),
        "fim": new Date("2024-06-13T11:00"),
        "completo": false,
        "id": 103
      }
    ]
  }
});