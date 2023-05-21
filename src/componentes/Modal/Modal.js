import React from 'react'
import  styled from 'styled-components';

const Modal = ({children,estado,setEstado,titulo}) => {
  return (
    <>
      {estado &&


        <OverLay>
        <ContenedorModal>
        <EncabezadoModal><h2>{titulo}</h2></EncabezadoModal>
        <BotonCerrar onClick={() => setEstado(!estado)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </BotonCerrar>


        {children}
      
      
      
        </ContenedorModal> 
        </OverLay>
      }
    </>
  
  )
}

export default Modal


const OverLay=styled.div`
display:flex;
width:100vw;
height:100vh;
position:fixed;
left:0px;
top:0px;
background:rgba(0,0,0,.2);
display:flex;
align-items:center;
justify-content:center;


`
const ContenedorModal = styled.div`

  width :400px;
 
  min-height:100px;
  border-radius:5px;
  position:relative;
  background:#fff;

  padding:20px;
  padding-top:0;
  border-color:grey;

/*   box-shadow: 5px 5px 40px;
  box-shadow: 5px 5px 10px; 
  box-shadow: 0 0 10px 5px;
  box-shadow: 5px 5px 2px; */
  box-shadow: 3px 5px 40px; 
 
`
const EncabezadoModal=styled.div`
  display:flex;
 
  justify-content:space-between;
  min-whidth :40px;


  border-bottom:2px solid #E8E8E8;

  h2 {
    color:#1766DC;
    font-weight:500;
    font-size:18px;

  }
`

const BotonCerrar=styled.button`
position:absolute;
right:20px;
top:10px;
width:30px;
height:30px;
border:none;
color:#1766DC;
background:none;
font-size:16px;
&:hover{

  background:#F2F2F2;
}

svg {
  width:100%;
  height:100%;
}

cursor:pointer;



`