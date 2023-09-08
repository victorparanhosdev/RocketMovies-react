import {Container, Form, Background} from './styles'
import { Input } from '../../Componentes/Input';
import { Button } from '../../Componentes/Button';
import { ButtonText } from '../../Componentes/ButtonText';
import {FiMail, FiLock, FiUser,FiArrowLeft} from "react-icons/fi"
import { api } from '../../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  function handleSignUp(){

    if(!name || !email || !password){
      return alert("Por Favor, Preencha todos os campos")
    }
    api.post("/users", {name, email, password}).then(()=> {
      alert("Usuario Cadastrado com Sucesso")

      navigate("/")
    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert("Não foi possivel cadastrar")
      }
    })
    

  }

  return(
    <Container>
      <div>


      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Crie sua conta</h2>
      <Input placeholder="Nome" type="text" icon={FiUser} onChange={e=> setName(e.target.value)}/>
      <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e=> setEmail(e.target.value)}/>
      <Input placeholder="Senha" type="password" icon={FiLock} onChange={e=> setPassword(e.target.value)}/>
      <Button name="Cadastrar" onClick={handleSignUp}/>

      <ButtonText to="/" icon={FiArrowLeft} name="Voltar para o login"/>

      </Form>
      
      </div>
      <Background/>

    </Container>
  )

}