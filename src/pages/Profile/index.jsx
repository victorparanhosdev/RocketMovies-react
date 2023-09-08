import { Container, Form, Avatar } from "./styles";
import {Input} from "../../Componentes/Input"
import {ButtonText} from "../../Componentes/ButtonText"
import {Button} from "../../Componentes/Button"
import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from "react-icons/fi"
import { useAuth } from "../../hooks/auth";
import {useState} from "react"
export function Profile(){
  const {updateProfile, user} = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")
 

  async function handleUpdateProfile(){

    await updateProfile({name, email, passwordNew, passwordOld})
  }
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
      
      
      <Input type="text" icon={FiUser} placeholder="Nome" value={name} onChange={e=> setName(e.target.value)}/>
      <Input type="email" icon={FiMail} placeholder="E-mail" value={email} onChange={e=> setEmail(e.target.value)}/>
      <Input type="password" icon={FiLock} placeholder="Senha atual" onChange={e=> setPasswordOld(e.target.value)}/>
      <Input type="password" icon={FiLock} placeholder="Nova senha" onChange={e=> setPasswordNew(e.target.value)}/>

      <Button onClick={handleUpdateProfile} name="Salvar" />

      </Form>
      
    </Container>
  )
}