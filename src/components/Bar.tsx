import React, { useEffect, useState } from "react";
import "./../assets/styles/buttons.css";
import "./../assets/styles/bar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Item } from "../model/item.interface";

const Bar = () => {
  const navigate = useNavigate();
  const [nextUrl, setnextUrl] = useState('')
  const [backUrl, setbackUrl] = useState('');
  const [items, setItems] = useState<Item[]>([])
  const location = useLocation();

  const styleMenuItems = useSelector( (state: RootState) => state.styleMenu );
  const designMenuItems = useSelector( (state: RootState) => state.designMenu );
  const typoMenuItems = useSelector( (state: RootState) => state.typoMenu );
  useEffect(() => {
    switch (location.pathname) {
      case `${process.env.REACT_APP_URL_BASE}`:
        setbackUrl(`${process.env.REACT_APP_URL_BASE}/`)
        setnextUrl(`${process.env.REACT_APP_URL_BASE}/estilos`)
        setItems(designMenuItems.value);
        break;
      case `${process.env.REACT_APP_URL_BASE}/`:
        setbackUrl(`${process.env.REACT_APP_URL_BASE}/`)
        setnextUrl(`${process.env.REACT_APP_URL_BASE}/estilos`)
        setItems(designMenuItems.value);
        break;
      case `${process.env.REACT_APP_URL_BASE}/estilos`:
        setbackUrl(`${process.env.REACT_APP_URL_BASE}/`)
        setnextUrl(`${process.env.REACT_APP_URL_BASE}/tipografia`)
        setItems(styleMenuItems.value);
        break;
      case `${process.env.REACT_APP_URL_BASE}/tipografia`:
        setbackUrl(`${process.env.REACT_APP_URL_BASE}/estilos`)
        setnextUrl(`${process.env.REACT_APP_URL_BASE}/formulario`)
        setItems(typoMenuItems.value);
        break;
      case `${process.env.REACT_APP_URL_BASE}/formulario`:
        setbackUrl(`${process.env.REACT_APP_URL_BASE}/tipografia`)
        setnextUrl(`${process.env.REACT_APP_URL_BASE}/formulario`)
        setItems([])
        break;
      default:
        break;
    }
  }, [location.pathname, styleMenuItems, designMenuItems, typoMenuItems])

  const goBack = () => {
    navigate(backUrl)
  }

  const goNext = () => {
    navigate(nextUrl)
  }
  return (
    <div className="bar">
      <div className="buttons-container">
        <button onClick={() => goBack()} className="last">Regresar</button>
        { location.pathname !== `${process.env.REACT_APP_URL_BASE}/formulario` && (
          <button disabled={ items.length <= 0 ? true : false } onClick={() => goNext()} className="next">Continuar</button>
        ) }
      </div>
    </div>
  );
};

export default Bar;
