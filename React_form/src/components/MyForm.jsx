import React from "react";
import "./MyForm.css";

import { useState } from "react";

export const MyForm = ({ userName, userEmail }) => {
  //gerenciamento de dados
  const [name, setName] = useState(userName); //("") imput controlado
  const [email, setEmail] = useState(userEmail); //("") imput controlado

  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");


  const handleName = (e) => {
    setName(e.target.value);
  };

  //envio de form
  const handleSumit = (e) => {
    e.preventDefault();
    console.log(name, email, bio,role);

    //validaçao
    //envio

    //limpando o form
    setEmail("");
    setName("");
    setBio("");
    setRole("")
  };

  console.log(name);

  return (
    <div>
      {/* Criaçao de form */}

      {/*Envio de formulario */}

      <form onSubmit={handleSumit}>
        <div>
          <label htmlFor="name">Nome:</label> {/* handleName é uma funaçao */}
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            //controled input
            value={name || ""} //estou atribuindo uma string vazia e depois para string que determinamos, assim tiramos o worner do console
            //outra abordagem tambem é no useStatde() iniciarmos com string vazia com um "" == dentro do parentece useState("")
          />
        </div>

        {/* Label envolvendo input */}
        <label>
          <span>E-mail:</span> {/* Metodo para simplifcar a manipulaçao */}
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(i) => setEmail(i.target.value)}
            //controled input
            value={email || ""} //estou atribuindo uma string vazia e depois para string que determinamos, assim tiramos o worner do console
            //outra abordagem tambem é no useStatde() iniciarmos com string vazia com um "" == dentro do parentece useState("")
          />
        </label>
        {/* textarea*/}
        <label>
          <span>Bio:</span>F
          <textarea
            name="bio"
            placeholder="descriçao do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* select */}
        <label>
          <span>Funçao no sistema</span>
          <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
