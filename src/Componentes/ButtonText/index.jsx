import {Container} from './styles'


export function ButtonText({name, ...rest}){
  return(
    <Container>
      <a {...rest}>{name}</a>
    </Container>
  )
}