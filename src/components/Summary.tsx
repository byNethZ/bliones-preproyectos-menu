import React from "react";
import { store } from "../app/store";
import { Item } from "../model/item.interface";
import CardSummary from "./shared/CardSummary";

import './../assets/styles/summary.css';

const Summary = () => {
  const storeItems = store.getState();
  return (
    <div className="summary__container">
      <h3 className="summary__title">Seleccionados</h3>
      <div className="summary__section">
        <p className="summary__subtitle">Diseño del menú</p>
        <div className="summary__cards">
          {storeItems.designMenu.value.map((item: Item) => (
            <CardSummary key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="summary__section">
        <p className="summary__subtitle">Estilo del menú</p>
        <div className="summary__cards">
          {storeItems.styleMenu.value.map((item: Item) => (
            <CardSummary key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="summary__section">
        <p className="summary__subtitle">Tipografía del menú</p>
        <div className="summary__cards">
          {storeItems.typoMenu.value.map((item: Item) => (
            <CardSummary key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
