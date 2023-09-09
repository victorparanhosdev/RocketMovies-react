import { Container, Form, Avatar } from "./styles";
import {Input} from "../../Componentes/Input"
import {ButtonText} from "../../Componentes/ButtonText"
import {Button} from "../../Componentes/Button"
import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from "react-icons/fi"
import { useAuth } from "../../hooks/auth";
import {useState} from "react"
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
export function Profile(){
  const {updateProfile, user} = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder 

  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)
  async function handleUpdateProfile(){

    await updateProfile({name, email, passwordNew, passwordOld, avatarFile})
  
  }
  async function handleUpdateAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }
  return(
    <Container>
      <header>

        <ButtonText to="/" icon={FiArrowLeft} name="Voltar"/>

      </header>
      
      <Form>

      <Avatar>
      <div>
        <img src={avatar} alt={`Foto do Perfil de ${name}`} />
        <label htmlFor="inputfile"><FiCamera /><input type="file" name="" id="inputfile" onChange={event => handleUpdateAvatar(event)} /></label>
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