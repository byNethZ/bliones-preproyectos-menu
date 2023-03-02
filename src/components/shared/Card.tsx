import React from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { addItemDesign, deleteItemDesign } from "../../features/styleDesignSlice/styleDesignSlice";
import { addItemStyle, deleteItemStyle } from "../../features/styleMenu/styleMenuSlice";
import { addItemText, deleteItemText } from "../../features/styleTextSlice/styleTextSlice";
import { Item } from "../../model/item.interface";
import "./../../assets/styles/card.css";

interface Params {
  item: Item;
  clicked: boolean;
  type: keyof RootState;
}

const Card = ({ item, type, clicked }: Params) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    switch (type) {
      case "designMenu":
        clicked ? dispatch(deleteItemDesign(item.id)) : dispatch(addItemDesign(item));
        break;
      case "styleMenu":
        clicked ? dispatch(deleteItemStyle(item.id)) : dispatch(addItemStyle(item));
        break;
      case "typoMenu":
        clicked ? dispatch(deleteItemText(item.id)) : dispatch(addItemText(item));
        break;
  
      default:
        clicked ? dispatch(deleteItemDesign(item.id)) : dispatch(addItemDesign(item));
        break;
    }
  };

  return (
    <div
      className={`fadeIn card ${clicked ? "clicked" : ""}`}
      onClick={() => handleClick()}
    >
      <img src={item.image} alt={item.name} />
      <div className="info-card">
        <h2>{item.name}</h2>
      </div>
    </div>
  );
};

export default Card;
