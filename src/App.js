import React, {Fragment} from 'react';
import styled from 'styled-components';
import Paleta from './Components/Paleta';



function App() {



const Titulo = styled.h1 `
    color: white;
    padding-top: 5rem;
    font-family:'Raleway';
    weight: 600;
    padding-bottom: 5rem;
`;
const Contenedor = styled.div `
    background-color: black;
    height: 100vh;
    text-align: center;
`;

const Boton = styled.button `
    margin-top: 4rem;
    background: none;
    border: 1px solid #FFF;
    font-size: 1rem;
    padding: 10px 20px;
    color: #FFF;    
`
;


return (
        <Contenedor>
            <Titulo>
                Random Colours Generator
            </Titulo>
            
            <Paleta />

            <Boton>Generate</Boton>
        </Contenedor>
  );
}

export default App;
