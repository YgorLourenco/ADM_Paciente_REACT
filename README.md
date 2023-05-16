# Administrador de marcação de consulta de Pet Shop em React

Tecnologias usadas:
- JavaScript
- React
- Skeleton CSS

Para acessar o projeto [Clique aqui!](https://adm-paciente-react.netlify.app/).

Documentação do arquivo App.js
O arquivo App.js é um arquivo Javascript que contém o código fonte principal para um aplicativo de administração de pacientes. Ele inclui o uso da biblioteca React, bem como a definição de componentes e funções para realizar várias operações.

Importações
O arquivo começa com as importações necessárias para usar as bibliotecas React. Ele importa o Fragment, useState e useEffect.

import { Fragment, useState, useEffect } from "react";
Também importa dois componentes personalizados, Formulario e Encontro.

import Formulario from './components/Formulario'
import Encontro from './components/Encontro'
Funções
O arquivo App.js contém várias funções que realizam diversas operações no aplicativo.

criarEncontro
A função criarEncontro é responsável por adicionar um novo encontro ao estado do aplicativo.

const criarEncontro = encontro => {
    guardarEncontros([...encontros, encontro])
}
eliminarEncontro
A função eliminarEncontro é responsável por remover um encontro existente do estado do aplicativo.

const eliminarEncontro = id => {
    const novosEncontros = encontros.filter(encontro => encontro.id !== id)
    guardarEncontros(novosEncontros)
}
Variáveis de estado
O arquivo App.js define uma variável de estado, encontros, que contém uma matriz de todos os encontros existentes no aplicativo.

const [encontros, guardarEncontros] = useState(encontrosIniciais)
Use Effect
O arquivo App.js usa a função useEffect do React para realizar certas operações quando o estado do aplicativo é atualizado. Essa função é usada para salvar os encontros no armazenamento local do navegador.

useEffect(() => {
    let encontrosIniciais = JSON.parse(localStorage.getItem('encontros'));
    if(encontrosIniciais) {
        localStorage.setItem('encontros', JSON.stringify(encontros))
    } else {
        localStorage.setItem('encontros', JSON.stringify([]));
    }
}, [encontros]);
Componentes
O arquivo App.js define dois componentes personalizados, Formulario e Encontro, que são usados no aplicativo para adicionar e exibir encontros.

<Formulario criarEncontro={criarEncontro} />

<Encontro 
    key={encontro.id}  
    encontro={encontro}
    eliminarEncontro={eliminarEncontro}
/>
Exportação
O arquivo App.js exporta por padrão o componente App, que é usado pelo arquivo index.js para renderizar o aplicativo.

export default App;
