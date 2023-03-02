import React, { useState } from "react";
import './../assets/styles/form.css';
import './../assets/styles/buttons.css'
import Summary from "./Summary";
import { store } from "../app/store";
import { DataForm, User } from "../model/item.interface";
import { sendForm } from "../services/Services";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

interface Params {
  title: string;
  step: number;
}

const Formulario = ({ title, step }: Params) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: ''
  })
  const storeItems = store.getState();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data: DataForm = {
      user,
      styleItems: storeItems.styleMenu.value,
      designItems: storeItems.designMenu.value,
      typoItems: storeItems.typoMenu.value,
    }
    console.log(data)
    sendForm(data).then( (response) => {
      if(response.code === 200) {
        MySwal.fire({
          icon: 'success',
          title: 'Datos enviados correctamente',
          text: 'Uno de nuestros asesores se comunicará con usted lo más pronto posible',
        })
        setTimeout(() => {
          window.location.href = 'https://www.bliones.com/';
      }, 5000);
      }
      MySwal.fire({
        icon: 'error',
        title: 'Oh...',
        text: 'Al parecer algo salió mal',
      })
    })
  }

  
  return (
    <div className="card-form">
      <form className="form" onSubmit={ (evt) => handleSubmit(evt)}>
        <div className="form-rows">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="" onChange={(evt) => setUser({...user, name: evt.target.value})} />
        </div>
        <div className="form-rows">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="" onChange={(evt) => setUser({...user, email: evt.target.value})} />
        </div>
        <div className="button-container">
          <button disabled={user.name ==='' || user.email === '' ? true : false} className="button submit">Enviar</button>
        </div>
      </form>
      <Summary/>
    </div>
  );
};

export default Formulario;
