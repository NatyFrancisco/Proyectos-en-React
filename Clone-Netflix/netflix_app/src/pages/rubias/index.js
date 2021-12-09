import React from 'react';

import shawn from '../../assets/img2/shawn.jpg';
import marlon from '../../assets/img2/marlonr.jpg';
import jaime from '../../assets/img2/jaime.jpg';
import frankei from '../../assets/img2/frankei.jpg';
import munro from '../../assets/img2/munro.jpg';
import heard from '../../assets/img2/heard.jpg';
import busy from '../../assets/img2/busy.jpg';
import terry from '../../assets/img2/terry.jpg';




const Portada2 = _ => {
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



        <div>
    <h2><b>Datos sobre la pelicula ¿Y donde estan las rubias?</b></h2>

    <p><b>Produccion</b>	Columbia Pictures</p>
    <p><b>Guion por: </b> Keenen Ivory Wayans</p>
    <p><b>Pais</b>	Estados Unidos</p>
   <p> <b>Año</b>	2004</p>
    <p><b>Género</b>	Comedia</p>
    <p><b>Duración</b>	109 minutos</p>
    <p><b>Productora</b>	Revolution Studios</p>
    <p><b>Protagonistas:</b></p>
  
    <img src={shawn} width="250" height="250" className='mr-3' />

        Shawn Wayans

        <img src={marlon} width="250" height="250" className='mr-3' />
Marlon Wayans

<img src={jaime} width="250" height="250" className='mr-3' />
Jaime King

<img src={frankei} width="250" height="250" className='mr-3' />
Frankie Faison

<br/>
<br/>

<img src={munro} width="250" height="250" className='mr-3' />
Lochlyn Munro

<img src={heard} width="250" height="250" className='mr-3' />
John Heard

<img src={busy} width="250" height="250" className='mr-3' />
Busy Philipps

<img src={terry} width="250" height="250" className='mr-3' />
Terry Crews

<br/>
<br/>
<p><b>País:</b>	Estados Unidos</p>
<p><b>Año: </b> 2004</p>
<p><b>Género:</b>	Comedia</p>
<p><b>Duración:</b>	109 minutos</p>


  
</div>

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

export default Portada2;