import React from 'react'
import ReactDOM from 'react-dom/client'
import {NavBar } from './NavBar';
import { History } from './History';
import {Catalogo} from './Catalogo';
import { Location } from './Location';
import { Down } from './Footer';
import "./index.css";
import  ScrollToTopButton from "./scrollBtn";
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
 <NavBar/>
 <History/>
 <Catalogo/>
 <Location/>
 <Down/>
 <ScrollToTopButton /> 
    </>

)
