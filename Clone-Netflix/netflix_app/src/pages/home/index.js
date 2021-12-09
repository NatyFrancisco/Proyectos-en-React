import React from 'react'

import betty from '../../assets/img/betty.jpg';
import titanic from '../../assets/img/titanic.jpg'
import rubias from '../../assets/img/rubias.jpg';
import papel from '../../assets/img/papel.jpeg';

export default ()=><div  style={{backgroundColor: "black"}} > 
  <div className="container">

    <a href="http://localhost:3000/">
<h1 className="ml-3"><font color="red" size="8"><b>NETFLIX</b></font></h1>
</a>

<a href="/Buscar/index" className="btn ml-3" style={{backgroundColor : "red"}}><font color="white"><b>🔍BUSCAR</b></font></a>


<a  href="/About/index" className="btn ml-3" style={{backgroundColor : "red"}}><font color="white"><b>⭐MI LISTA</b></font></a>


<br/>
<br/>

<h2  className="text-center" ><font color="white" >¡Hola de nuevo!</font></h2>

<h1 className="text-center" ><font color="white" size="8"><b>Películas y series ilimitadas </b></font></h1>
<h1 className="text-center" ><font color="white" size="8"><b> y mucho más.</b></font></h1>

<h2 className="text-center" ><font color="white" >Disfruta donde quieras. Cancela cuando quieras.</font></h2>

<br/>
<br/>

<a href ="/Betty/index">
< img src={betty} width="250" height="250" className='mr-3'/>
</a>

<a href ="/Rubias/index">
<img src={rubias} width="250" height="250" className='mr-3'  />
</a>

<a href ="/Titanic/index">
<img src={titanic} width="250" height="250" className='mr-3'  />
</a>

<a href ="/Papel/index">
<img src={papel} width="275" height="250" className='mr-3'  />
</a>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>




</div>
</div>