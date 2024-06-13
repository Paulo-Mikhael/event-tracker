import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const atualizarEvento = useAtualizarEvento();
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]
  const alterarStatus = () => {
    const eventoAtualizado = {
      ...evento
    }
    eventoAtualizado.completo = !evento.completo

    atualizarEvento(eventoAtualizado);

    console.log(eventoAtualizado);
  }

  return (<i className={estilos.join(' ')} onClick={() => alterarStatus()}></i>)
}

export default EventoCheckbox