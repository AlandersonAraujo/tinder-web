import React, { useState } from 'react';
//Importando o css 
import './Login.css';
//Importando a api para comunicação com backend
import api from '../services/api';
//Importando a logo
import logo from '../assets/logo.svg';
//Criando a função já exportando
export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
      e.preventDefault();
     //Definindo a rota e colhendo o usuário
     const response = await api.post('/devs', {
        username,
     });
       const {_id } = response.data;
      //Incluindo o id na rota
      history.push(`/dev/${_id}`);
    }

   return (
       <div className = "login-container">  
       <form onSubmit={handleSubmit}>
       <img src={logo}  alt="Tindev" /> 
       <input 
       placeholder = "Digite seu usuário no GitHub"
       value={username}
       onChange={e => setUsername(e.target.value)}
       />
       <button type = "submit">Enviar</button>
       </form>
     </div>

   );

}
