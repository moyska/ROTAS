import { BrowserRouter, Routes, Route } from "react-router-dom";

import home from'./pages/home';
import sobre from'./pages/sobre';
import contato from'./pages/contato';
import erro from'./pages/erro';
import produto from'./pages/produto';

import Header from './componentes/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={home}/>
            <Route path="/sobre" element={sobre}/>
            <Route path="/contato" element={contato}/>
            <Route path="/*" element={erro}/>
            <Route path="/produto" element={produto}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;