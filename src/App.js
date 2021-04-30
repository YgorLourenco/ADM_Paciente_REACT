import { Fragment, useState, useEffect} from "react";
import Formulario from './components/Formulario'
import Encontro from './components/Encontro'

function App() {
 
  // Encontros em local storage
  let encontrosIniciais = JSON.parse(localStorage.getItem('encontros')); // JSON.parse transforma string em objeto
  if (!encontrosIniciais) { // Se não existir nada na variavel
    encontrosIniciais = [];
  }
 
  // Arranjo de encontros
  const [encontros, guardarEncontros] = useState(encontrosIniciais)

  // Use Effect para realizar certas operações quando o State muda
  // Vai ser responsavel por salvar os encontros marcados
  useEffect(() => {
    let encontrosIniciais = JSON.parse(localStorage.getItem('encontros'));
    if(encontrosIniciais) {
      localStorage.setItem('encontros', JSON.stringify(encontros)) //JSON.stringify transforma object em string
    } else {
      localStorage.setItem('encontros', JSON.stringify([]));
    }
  }, [encontros]); // Vai salvar os encontros no armazenamento local(local storage)

  // Função que toma os encontros atuais e agrega novos
  const criarEncontro = encontro => {
      guardarEncontros([...encontros, encontro])
  }

  // Função que elemina um encontro pela sua ID
  const eliminarEncontro = id => {
    const novosEncontros = encontros.filter(encontro => encontro.id !== id)
    guardarEncontros(novosEncontros)
  }

  // Mensagem Condicional - Vai mudar o titulo da direita baseado na condição
  const titulo = encontros.length === 0 ? 'Não há encontros' : 'Administrar seus encontros'

  return (
    <Fragment>
      <h1>🐱Administrador de Pacientes🐶</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
              <Formulario 
                criarEncontro={criarEncontro}
              />
          </div>
          <div className='one-half column'>
              <h2>{titulo}</h2>
              {encontros.map(encontro => (
                <Encontro 
                key={encontro.id}  
                encontro={encontro}
                eliminarEncontro={eliminarEncontro}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
