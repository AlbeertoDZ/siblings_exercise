import React, {useState, useContext} from "react";
import { UserContext } from "../../../context/userContext";

const Form = ({updateData}) => {
  const {updateEmail} = useContext(UserContext);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    urlImagen: "",
    edad: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(values);


  }


  return <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" onChange={handleChange} placeholder="Nombre" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
      </div>
      <div>
        <label htmlFor="urlImagen">URL de imagen</label>
        <input type="text" name="urlImagen" onChange={handleChange} placeholder="URL de imagen" />
      </div>
      <div>
        <label htmlFor="edad">Edad</label>
        <input type="number" name="edad" onChange={handleChange} placeholder="Edad" />
      </div>
      <button type="submit">CREAR USUARIO 🪄</button>
    </form>
};

export default Form;
