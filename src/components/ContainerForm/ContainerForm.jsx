import React, { useState } from 'react'
import {InputStyle,BtnStyle, ContainerLoginStyle} from './ContainerFormStyle'

const URLBaseLocalhost = `http://localhost:27017/`

//debe ser el url donde esta alojado el backend
const URLBaseHosting = `https://pruebabd-api-production.up.railway.app/`

export const ContainerForm = () => {
  const [inputUser, setUser] = useState('')
  const [inputPassword, setPassword] = useState('')

  const targetUser = (e) => {
    const {username, password} = e.target.dataset;
    const user = {username,password}
    return user;

  }
  const showUsers = async (e) => {
    e.preventDefault()
    
   const Users = await fetch(`${URLBaseHosting}showUsers`)
   const data = await Users.json()
   console.log(data)

  

  }

  const addUser = async (e) => {
    e.preventDefault()
    const userJSON = JSON.stringify(targetUser(e))
  
    await fetch(`${URLBaseHosting}createUser`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:userJSON
    })

   }

  return (
    <ContainerLoginStyle>
       <h2>Login</h2>
       <InputStyle placeholder='Usuario' data-username={inputUser} onChange={(e) => setUser(e.target.value)}/>
       <InputStyle placeholder='Contraseña' data-password={inputPassword}type={'password'} onChange={(e) => setPassword(e.target.value)}/>
       <BtnStyle data-username={inputUser} data-password={inputPassword} onClick={(e)=> addUser(e)}>Enviar Datos</BtnStyle>
       <BtnStyle onClick={(e)=> showUsers(e)}>Mostrar Usuarios</BtnStyle>
    </ContainerLoginStyle>
  )
}

