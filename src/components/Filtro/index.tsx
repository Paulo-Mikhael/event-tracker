import React, { useEffect, useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../state/atom';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const [situacao, setSituacao] = useState('Todas');
  const setFiltroEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEventos = {}

    if (data){
      filtro.data = new Date(data);
    }else{
      filtro.data = null;
    }

    if (situacao === 'Todas'){
      filtro.situacao = null;
    }
    else if (situacao === 'Completas'){
      filtro.situacao = true;
    }
    else if (situacao === 'Incompletas'){
      filtro.situacao = false;
    }

    setFiltroEventos(filtro);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />
    <FormControl fullWidth sx={{ marginTop: '10px' }}>
      <InputLabel id="demo-simple-select-label">Situação</InputLabel>
      <Select
        value={situacao}
        onChange={(evt) => setSituacao(evt.target.value)}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        variant='standard'
      >
        <MenuItem value='Todas'>Todas</MenuItem>
        <MenuItem value='Completas'>Completas</MenuItem>
        <MenuItem value='Incompletas'>Incompletas</MenuItem>
      </Select>
    </FormControl>
    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro