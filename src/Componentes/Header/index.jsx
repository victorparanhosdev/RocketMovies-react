import { Container, Profile } from "./styles"
import {Input} from '../../Componentes/Input'
import { Link } from "react-router-dom"
export function Header(){
    return(
        <Container>
            <div>
            <h1>ReactMovies</h1>
            <Input placeholder="Pesquisar pelo titulo"/>
            <Profile>
                <div>
                    <span>Victor Paranhos</span>
                    <Link to="/">sair</Link>
                </div>
                <Link to="/profile"><img src="https://github.com/victorparanhosdev.png" alt="Foto Perfil" /></Link>
            </Profile>
            </div>
        </Container>
    )
}