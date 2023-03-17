import { Container, Form, Avatar } from "./styles";
import {Input} from "../../Componentes/Input"
import {ButtonText} from "../../Componentes/ButtonText"
import {Button} from "../../Componentes/Button"
import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from "react-icons/fi"

export function Profile(){

  return(
    <Container>
      <header>
      <div>
        <ButtonText to="/" icon={FiArrowLeft} name="Voltar"/>
      </div> 
      </header>
      
      <Form>

      <Avatar>
      <div>
        <img src="https://github.com/victorparanhosdev.png" alt="Foto Perfil" />
        <label htmlFor="inputfile"><FiCamera /><input type="file" name="" id="inputfile" /></label>
      </div>
      </Avatar>
      
      
      <Input icon={FiUser} placeholder="Nome" />
      <Input icon={FiMail} placeholder="E-mail"/>
      <Input icon={FiLock} placeholder="Senha atual"/>
      <Input icon={FiLock} placeholder="Nova senha"/>

      <Button name="Salvar" />

      </Form>
      
    </Container>
  )
}