
import React, {useState} from 'react';
import Modal from "./componentes/Modal/Modal";
import  styled from 'styled-components';
function App() {
  const [estModal1,setEstModal1]=useState(false);
  const [estModal2,setEstModal2]=useState(false);
  const [estModal3,setEstModal3]=useState(false);
  return (
    <div className="App">

      <ContenedorBotones>
        <Boton onClick={() => setEstModal1(!estModal1)} >Modal1</Boton>
        <Boton onClick={() => setEstModal2(!estModal2)} >Modal2</Boton>
        <Boton onClick={() => setEstModal3(!estModal3)} >Modal3</Boton>
      </ContenedorBotones>
        <Modal    estado={estModal1} setEstado={setEstModal1} titulo='Hola!!'>
          <h1>Soy modal</h1>
          <h2>Contenido</h2>
          <p> Ventana Modal con opciones de Personalizacion</p>
     
        </Modal>  

        <Modal    estado={estModal2} setEstado={setEstModal2} titulo='Registrese!!'>

          <h1> VENTANA MODAL 2</h1>
          <p> Ventana Modal con opciones de Personalizacion</p>
     
        </Modal> 


        
        <Modal    estado={estModal3} setEstado={setEstModal3} titulo='Error!'>

          <h4> Ingrese todos los campos</h4>
         

     
        </Modal>
    </div>
  );
}

export default App;

const ContenedorBotones=styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
padding:30px;

`
const Boton=styled.button`
display:block;
padding:10px 30px;
border-radius:100px;
color:#fff;
border:none;
background:#1766dc;

cursor:pointer;
&:hover{

  background:#0067ff;
  
}



`

