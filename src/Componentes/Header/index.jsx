import { Container, Profile } from "./styles"
import {Input} from '../../Componentes/Input'
import { Link } from "react-router-dom"
import {useAuth} from "../../hooks/auth"
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"


export function Header(){
    const {user, signOut} = useAuth()
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder 
    return(
        <Container>
            <div>
            <h1>ReactMovies</h1>
            <Input placeholder="Pesquisar pelo titulo"/>
            <Profile>
                <div>
                    <span>{user.name}</span>
                    <Link onClick={signOut} to="/">sair</Link>
                </div>
                <Link to="/profile"><img src={avatarURL} alt={`foto do perfil de ${user.name}`} /></Link>
            </Profile>
            </div>
        </Container>
    )
}