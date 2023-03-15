import {Container} from './styles'


export function Button({name, ...rest}){
  return(
    <Container type="button" {...rest}>{name}
    </Container>
  )
}