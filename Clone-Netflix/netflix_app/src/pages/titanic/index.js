import React from 'react';

import dicaprio from '../../assets/img3/leonardo.jpg';
import kate from '../../assets/img3/kate.jpg';
import billy from '../../assets/img3/billy.jpg';
import gloria from '../../assets/img3/gloria.jpg';
import bill from '../../assets/img3/bill.jpg';
import kathy from '../../assets/img3/kathy.jpg';
import frances from '../../assets/img3/frances.jpg';
import victor from '../../assets/img3/victor.jpg';







const Portada3= _ => {
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
        <h2><b>Datos sobre la pelicula "Titanic"</b></h2>

<p><b>Dirección: </b>	James Cameron </p>
<p><b>Producción: </b>Jon Landau</p>

        <p><b>Diseño de producción:</b>	Peter Lamont</p>
        <p><b>Guion:</b>	James Cameron</p>
        <p><b>Música: </b>	James Horner</p>
        
<p><b>Protagonistas:</b></p>	

<img src={dicaprio} width="250" height="250" className='mr-3' />
Leonardo DiCaprio

<img src={kate} width="250" height="250" className='mr-3' />
Kate Winslet

<img src={billy} width="250" height="250" className='mr-3' />
Billy Zane

<img src={gloria} width="250" height="250" className='mr-3' />
Gloria Stuart

<br/>
<br/>

<img src={bill} width="250" height="250" className='mr-3' />
Bill Paxton

<img src={kathy} width="250" height="250" className='mr-3' />
Kathy Bates

<img src={frances} width="250" height="250" className='mr-3' />
Frances Fisher

<img src={victor} width="250" height="250" className='mr-3' />
Victor Garber

<br/>
<br/>
<p><b>País:</b>	Estados Unidos</p>
<p><b>Año:</b>	1997</p>
<p><b>Género</b>	Romance
,Catástrofe
Drama</p>
<p><b>Duración:</b>195 min</p>

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

export default Portada3;