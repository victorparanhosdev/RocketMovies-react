import { Container } from "./styles";


export function NewItem({title, ico: Icon}){
    return(
        <Container>
            {title}{Icon && <Icon size={24}/>}
        </Container>
    )
}