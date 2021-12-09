

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Buscar = lazy(() => import('../pages/buscar'));
const Betty = lazy(() => import('../pages/betty'));
const Rubias = lazy(() => import('../pages/rubias'));
const Titanic = lazy(() => import('../pages/titanic'));
const Papel = lazy(() => import('../pages/papel'));


const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      
        
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/buscar" component={Buscar}/>
        <Route path="/betty" component={Betty}/>
        <Route path="/rubias" component={Rubias}/>
        <Route path="/titanic" component={Titanic}/>
        <Route path="/papel" component={Papel}/>
      
    </Suspense>
  </Router>
);
export default Routes;