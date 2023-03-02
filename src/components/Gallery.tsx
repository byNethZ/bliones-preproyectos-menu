import React from "react";
import Card from "./shared/Card";
import "./../assets/styles/gallery.css";
import {Item} from "../model/item.interface";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

interface Params {
  title: string;
  step: keyof RootState;
  items: Item[]
}

const Gallery = ({ title, step, items }: Params) => {

  const styleMenuItems = useSelector( (state: RootState) => state[step] );
  
  return (
    <div className="fadeIn">
      <h2 className="title">{title}</h2>
      <p>Elige al menos un elemento</p>
      <div className="gallery">
        {items.map((item) => (
          <Card key={item.id} item={item} type={step} clicked={ styleMenuItems.value.some( (el: Item) => el.id === item.id ) } />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
