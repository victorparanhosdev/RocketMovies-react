import {Container} from './styles'


export function ButtonText({icon: Icon, name, ...rest}){
  return(
    <Container {...rest}>
      {Icon && <Icon size={20} />}{name}
    </Container>
  )
}