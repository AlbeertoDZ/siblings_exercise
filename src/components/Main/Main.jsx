import React, { useState } from "react";
import { UserContext } from "../../context/userContext";
import Head from "../Head";
import Form from "./Form";
import Card from "./Card";

const Main = () => {

  const [data, setData] = useState({
    nombre: "",
    email: "",
    urlImagen: "",
    edad: "",
  })

  const addData = (newData) => {
    setData(newData)
  }

  return <div>
    <UserContext.Provider value={ data.email }>
      <Head />
      <Form updateData={addData} />
      <Card data={data} />
    </UserContext.Provider>
  </div>;
};

export default Main;
