import React from "react";

const Card = ({data}) => {
  const {nombre, email, urlImagen, edad} = data
  return <article>
    <p>{nombre}</p>
    <p>{email}</p>
    <p>{urlImagen}</p>
    <p>{edad} </p>
    </article>;
};

export default Card;
