import { Container, Content } from "./styles"
import { Header } from "../../Componentes/Header"
import { ButtonText } from "../../Componentes/ButtonText"
import {FiArrowLeft} from "react-icons/fi"
import { Input } from "../../Componentes/Input"
import { Button } from "../../Componentes/Button"
export function NewMovie(){
  return(
    <Container>
      <Header />
    
      <Content>
      <ButtonText to="/" icon={FiArrowLeft} name="Voltar"/>
      <main>
        <h1>Novo Filme</h1>
        <div>
        <Input type="text" placeholder="Titulo"/>
        <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
        </div>
        
        <textarea placeholder="Observação" name="" id="" rows="5"></textarea>
 
        <div>
          <h2>Marcadores</h2>
          <div>
            <span>React</span>
          </div>
          
        </div>

        <div>
        <Button name="Excluir filme" />
        <Button name="Salvar alterações" />
        </div>
       



      </main>
      </Content>
    </Container>
  )
}