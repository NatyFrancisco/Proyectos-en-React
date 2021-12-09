import React from 'react';

import ana from '../../assets/img1/ana.jpg';
import herrera from '../../assets/img1/herrera.jpg';
import jorge from '../../assets/img1/jorge.jpg';
import julian from '../../assets/img1/julian.png';
import lorna from '../../assets/img1/lorna.jpg';
import luis from '../../assets/img1/luis.jpg';
import mario from '../../assets/img1/mario.jpg';
import ramirez from '../../assets/img1/ramirez.jpg';



const Portada1 = _ => {
    return (
        <div  style={{backgroundColor: "black"}} >

<a href="http://localhost:3000/">

<h1 className="ml-3"><font color="red" size="8"><b>NETFLIX</b></font></h1>
</a>

<a href="" className="btn ml-3" style={{backgroundColor : "red"}}><font color="white"><b>🔍BUSCAR</b></font></a>


<a  href="/About/index" className="btn ml-3" style={{backgroundColor : "red"}}><font color="white"><b>⭐MI LISTA</b></font></a>

<a  href="/About/index" className="btn ml-3" style={{backgroundColor : "red"}}><font color="white"><b>📄AGREGAR A MI LISTA</b></font></a>


<br/>
<br/>

<font color="white" >

    <h2><b>Datos sobre la telenovela "Yo soy Betty la fea"</b></h2>

    <p><b>Género: </b> telenovela</p>
   <p> <b>Guion por: </b> Fernando Gaitán</p>
   <p> <b>Dirigido por:</b> Mario Ribero</p>
  <p>  <b>Protagonistas:</b></p>
  <div>
    <img src={ana} width="250" height="250" className='mr-3' />
    Ana Maria Orozco

        <img src={jorge} width="250" height="250" className='mr-3' />
        Jorge Abello
        
        <img src={ramirez} width="250" height="250" className='mr-3' />
        
        Natalia Ramírez
        

        <img src={lorna} width="250" height="250" className='mr-3' />
        
        Lorna Cepeda
       <br/>
        

  <br/>
  
        <img src={luis} width="250" height="250" className='mr-3' />
        
   Luis Mesa
  

   <img src={julian} width="250" height="250" className='mr-3' />

  Julián Arango 

  <img src={herrera} width="250" height="250" className='mr-3' /> 
  
   Jorge Herrera
  

    <img src={mario} width="250" height="250" className='mr-3' />
    
 Mario Duarte


  
</div>
<br/>
<br/>

    <p><b>Tema principal:</b>«Se dice de mí»</p>
 <p>   <b>Ambientación:</b>	1999—2001</p>
<p><b>País de origen:</b> Colombia </p>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

</font>
        </div>

    )

}

export default Portada1;