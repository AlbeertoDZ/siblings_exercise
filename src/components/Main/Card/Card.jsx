import React from "react";

const Card = ({data}) => {
  const {nombre, email, urlImagen, edad} = data
  return <article>
    <p>{nombre}</p>
    <p>{email}</p>
    <img src={urlImagen} alt="foto" />
    <p>{edad} </p>
    </article>;
};

export default Card;
