import React from 'react';


import alba from '../../assets/img4/alba.jpg';
import alvaro from '../../assets/img4/alvaro.jpg';
import itziar from '../../assets/img4/itziar.jpg';
import jaime from '../../assets/img4/jaime.png';
import miguel from '../../assets/img4/miguel.jpg';
import paco from '../../assets/img4/paco.jpg';
import pedro from '../../assets/img4/pedro.jpg';
import ursula from '../../assets/img4/ursula.jpg';



const Portada4 = _ => {
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
        <h2><b>Datos sobre la pelicula "La casa de papel"</b></h2>

    <p><b>Creado por:</b>	Álex Pina</p>
<p><b>Dirigido por:</b>	
Jesús Colmenar,
Miguel Ángel Vivas,
Alex Rodrigo,
Alejandro Bazzano,
Javier Quintas,
Koldo Serra y
Albert Pintó
</p>

<p><b>Protagonistas	</b></p>

<img src={ursula} width="250" height="250" className='mr-3' />
Úrsula Corberó

<img src={itziar} width="250" height="250" className='mr-3' />
Itziar Ituño

<img src={alvaro} width="250" height="250" className='mr-3' />
Álvaro Morte



<img src={paco} width="250" height="250" className='mr-3' />
Paco Tous
<br/>
<br/>

<img src={pedro} width="250" height="250" className='mr-3' />
Pedro Alonso

<img src={alba} width="250" height="250" className='mr-3' />
Alba Flores

<img src={miguel} width="250" height="250" className='mr-3' />
Miguel Herrán

<img src={jaime} width="250" height="250" className='mr-3' />
Jaime Lorente

<br/>
<br/>

<p><b>País de origen:</b>	España</p>

<p><b>Duración:</b>	50 minutos</p>


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

export default Portada4;