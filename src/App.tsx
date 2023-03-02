import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import Bar from "./components/Bar";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./components/Formulario";
import items_1 from "./items_1.json"
import items_2 from "./items_2.json"
import items_3 from "./items_3.json"
import {Item} from "./model/item.interface";

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path={`${process.env.REACT_APP_URL_BASE}`} element={<Gallery items={(items_1 as Item[])} step={'designMenu'} title={'Diseño del Menú'}  />}></Route>
          <Route path={`${process.env.REACT_APP_URL_BASE}/`} element={<Gallery items={(items_1 as Item[])} step={'designMenu'} title={'Diseño del Menú'} />}></Route>
          <Route path={`${process.env.REACT_APP_URL_BASE}/estilos`} element={<Gallery items={(items_2 as Item[])} step={'styleMenu'} title={'Estilo del Menú'} />}></Route>
          <Route path={`${process.env.REACT_APP_URL_BASE}/tipografia`} element={<Gallery items={(items_3 as Item[])} step={'typoMenu'} title={'Tipografía del Menú'} />}></Route>
          <Route path={`${process.env.REACT_APP_URL_BASE}/formulario`} element={<Formulario step={4} title={'Formulario'} />}></Route>
        </Routes>
        <Bar />
      </Router>
    </div>
  );
}

export default App;
