import { Container } from "./styles";

export function InputAdd({value, placeholder, onClick, onChange, ico: Icon, ...rest}){
    return(
        <Container>
            <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
            <button type="button" onClick={onClick}>{Icon && <Icon size={24}/>}</button>
        </Container>
    )
}