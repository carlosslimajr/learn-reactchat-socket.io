import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import io from 'socket.io-client'

const socket = io('http://localhost:3333')


socket.on('connect',()=>{
  console.log('Nova conexão')
})

// import api from '../../assets/api/index'

export default function Chat() {

  const [teste,setTotalTeste] = useState(0)

  const [message,setMessage] = useState('')
  const [messages,setMessages] = useState([])
  const [author,setAuthor] = useState([])


  const handleInputChange = (event)=>{
    setMessage(event.target.value)
  }

  const handleFormSubmit = event =>{
    event.preventDefault() //impedir de recarregar
    if (message.trim()){
      console.log(message,messages)
      setMessages([...messages,message])
      setMessage('') //apagando pra simular mensagem
    }
  } 

  // useEffect(()=>{
  //   api.get('teste').then(response=>{
  //   console.log(response)
  //   const teste = response.data
  //   setTotalTeste(teste)
  //   })
  // }, [])

  return (
    <form id="chat" onSubmit={handleFormSubmit}>
      <input type="text" name="username" placeholder="Digite seu usuário"/>
        <div className="messages">
        {messages.map((m,index)=>(
          <div className="message" key={index}>
          {m}
          
          </div>
        ))}

        </div>
        <input type="text" 
        name="message" 
        placeholder="Digite sua mensagem" 
        className="message"
        value={message}
        onChange={handleInputChange}
        />
          <button type="submit">Enviar</button>

         <div>Api teste: {teste}</div>
     </form>
     
  )
}
