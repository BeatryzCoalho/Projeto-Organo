import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const[colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdiconado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador =>aoNovoColaboradorAdiconado(colaborador)}/>
    </div>
  );
}

export default App;
