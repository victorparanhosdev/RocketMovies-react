import {Container, Form, Background} from './styles'
import { Input } from '../../Componentes/Input';
import { Button } from '../../Componentes/Button';
import { ButtonText } from '../../Componentes/ButtonText';
import {FiMail, FiLock} from "react-icons/fi"


export function SignIn() {
  return(
    <Container>
      <div>


      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Faça seu login</h2>
      <Input placeholder="E-mail" type="text" icon={FiMail}/>
      <Input placeholder="Senha" type="password" icon={FiLock}/>
      <Button name="Entrar"/>

      <ButtonText name="Criar Conta"/>

      </Form>
      
      </div>
      <Background/>

    </Container>
  )

}