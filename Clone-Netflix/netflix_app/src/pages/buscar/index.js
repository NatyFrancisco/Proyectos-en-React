import { getAllByPlaceholderText } from '@testing-library/dom'
import React from 'react'

import betty from '../../assets/img/betty.jpg';
import titanic from '../../assets/img/titanic.jpg'
import rubias from '../../assets/img/rubias.jpg';
import papel from '../../assets/img/papel.jpeg';


const Buscar = _ => {
    return (
        <div  style={{backgroundColor: "black"}} >
<font color="white">
<div className="container">
<a href="http://localhost:3000/">

<h1 className="ml-3"><font color="red" size="8"><b>NETFLIX</b></font></h1>
</a>

<input className="form-control col-md-2 ml-3" type="text" /> <br/>
<a href="" className="btn ml-3" style={{backgroundColor : "red"}}><font color="white"><b>🔍BUSCAR</b></font></a>
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
</div>
</font>

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
<br/>
<br/>
</div>


    )

}




export default Buscar;