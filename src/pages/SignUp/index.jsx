import {Container, Form, Background} from './styles'
import { Input } from '../../Componentes/Input';
import { Button } from '../../Componentes/Button';
import { ButtonText } from '../../Componentes/ButtonText';
import {FiMail, FiLock, FiUser,FiArrowLeft} from "react-icons/fi"



export function SignUp() {
  return(
    <Container>
      <div>


      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Crie sua conta</h2>
      <Input placeholder="Nome" type="text" icon={FiUser}/>
      <Input placeholder="E-mail" type="text" icon={FiMail}/>
      <Input placeholder="Senha" type="password" icon={FiLock}/>
      <Button name="Cadastrar"/>

      <ButtonText to="/" icon={FiArrowLeft} name="Voltar para o login"/>

      </Form>
      
      </div>
      <Background/>

    </Container>
  )

}