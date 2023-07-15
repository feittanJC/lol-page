import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio, Champion } from "../pages";


const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/:id" element={<Champion/>} />
        </Routes>
    </BrowserRouter>
    );
};


export default Router;