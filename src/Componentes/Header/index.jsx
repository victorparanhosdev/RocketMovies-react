import { Container, Profile } from "./styles"
import {Input} from '../../Componentes/Input'

export function Header(){
    return(
        <Container>
            <h1>ReactMovies</h1>
            <Input placeholder="Pesquisar pelo titulo"/>
            <Profile>
                <div>
                    <span>Victor Paranhos</span>
                    <a href="">sair</a>
                </div>
                <img src="https://github.com/victorparanhosdev.png" alt="Foto Perfil" />
            </Profile>
        </Container>
    )
}