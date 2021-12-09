
import React from "react";
import ana from './pelicula1/img/ana.jpg';
import herrera from './pelicula1/img/herrera.jpg';
import jorge from './pelicula1/img/jorge.jpg';
import julian from './pelicula1/img/julian.jpg';
import lorna from './pelicula1/img/lorna.jpg';
import luis from './pelicula1/img/luis.jpg';
import mario from './pelicula1/img/mario.jpg';
import ramirez from './pelicula1/img/ramirez.jpg';

export default function Portada1(){
    return (

        <div>
    <h2><b>Datos sobre la telenovela "Yo soy Betty la fea"</b></h2>

    <b>Género: </b> telenovela
    <b>Guion por: </b> Fernando Gaitán
    <b>Dirigido por:</b> Mario Ribero
    <b>Protagonistas:</b>
  
    <img src={ana} width="250" height="250" className='mr-3' />
        Ana María Orozco

        <img src={jorge} width="250" height="250" className='mr-3' />
        Jorge Enrique Abello

        <img src={ramirez} width="250" height="250" className='mr-3' />
        Natalia Ramírez
      
        <img src={lorna} width="250" height="250" className='mr-3' />
        Lorna Cepeda

        <img src={luis} width="250" height="250" className='mr-3' />
   Luis Mesa

   <img src={julian} width="250" height="250" className='mr-3' />
  Julián Arango 

  <img src={herrera} width="250" height="250" className='mr-3' />   
   Jorge Herrera

    <img src={mario} width="250" height="250" className='mr-3' />
 Mario Duarte
<ul>Dora Cadavid</ul>
<ul>Stefanía Gómez</ul>
 <ul>Kepa Amuchastegui</ul>
<ul>Luces Velásquez</ul>
<ul>Paula Peña</ul>
<ul>Marcela Posada</ul>
<ul>Julio César Herrera</ul>
<ul>María Eugenia Arboleda</ul>
<ul>Alberto León Jaramillo</ul>
<ul>Adriana Franco</ul>
  


    <b>Tema principal:</b>«Se dice de mí»
    <b>Ambientación:</b>	1999—2001
<b>País de origen:</b> Colombia 
        </div>

    )

}
