import { Container } from "./styles";


export function NewItem({name, onClick, ico: Icon, ...rest}){
    return(
        <Container>
            <span>{name}</span>
            <button onClick={onClick} {...rest} type="button">{Icon && <Icon size={24}/>}</button>
        </Container>
    )
}