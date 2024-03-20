import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Gestão de Fidcs',
      corPrimaria:'#D9F7E9',
      corSecundaria:'#57C278'
    },
    {
      nome:'Gestão de Fundos',
      corPrimaria:'#E8F8FF',
      corSecundaria:'#82CFFA'
    },
    {
      nome:'TI',
      corPrimaria:'#F0F8E2',
      corSecundaria:'#A6D157'
    },
    {
      nome:'Crédito',
      corPrimaria:'#FDE7E8',
      corSecundaria:'#E06B69'
    },
    {
      nome:'Compliance',
      corPrimaria:'#FAE9F5',
      corSecundaria:'#DB6EBF'
    },
    {
      nome:'RH e Marcketing',
      corPrimaria:'#FFF5D9',
      corSecundaria:'#FFBA05'
    },
    {
      nome:'Agronegócio',
      corPrimaria:'#FFEEDF',
      corSecundaria:'#FF8A29'
    },


  ]

  const[colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdiconado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time =>time.nome)} aoColaboradorCadastrado={colaborador =>aoNovoColaboradorAdiconado(colaborador)}/>
      {times.map(time=> <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
    </div>
  );
}

export default App;
