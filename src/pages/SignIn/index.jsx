import {Container, Form, Background} from './styles'
import { Input } from '../../Componentes/Input';
import { Button } from '../../Componentes/Button';
import { ButtonText } from '../../Componentes/ButtonText';
import {FiMail, FiLock} from "react-icons/fi"
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';


export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()
  function handleSignIn(){
    signIn({email, password})
  }
  return(
    <Container>
      <div>


      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Faça seu login</h2>
      <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e=> setEmail(e.target.value)}/>
      <Input placeholder="Senha" type="password" icon={FiLock} onChange={e=> setPassword(e.target.value)}/>
      <Button name="Entrar" onClick={handleSignIn}/>

      <ButtonText to="/register" name="Criar Conta"/>

      </Form>
      
      </div>
      <Background/>

    </Container>
  )

}