import { Container, Content, Text} from "./styles"
import { Header } from "../../Componentes/Header"
import { ButtonText } from "../../Componentes/ButtonText"
import { FiArrowLeft } from "react-icons/fi"
import { IoMdClose, IoMdAdd } from "react-icons/io"
import { Input } from "../../Componentes/Input"
import { Button } from "../../Componentes/Button"
import { Section } from "../../Componentes/Section"
import {NewItem} from "../../Componentes/NewItem"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
export function NewMovie() {
  const {user} = useAuth()
  
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText to="/" icon={FiArrowLeft} name="Voltar" />
        <main>
          <h1>Novo Filme</h1>

          <Text>

            <div>
              <Input type="text" placeholder="Titulo" />
              <Input type="text" placeholder="Sua nota (de 0 a 5)" />
            </div>

            <textarea placeholder="Observação" name="" id="" rows="3"></textarea>
          </Text>

          <Section>
            <h2>Marcadores</h2>
            <div>
              <NewItem title="React" ico={IoMdClose}/>
              <div>
                <input type="text" placeholder="Novo Marcador" /><IoMdAdd />
              </div>
            </div>
          </Section>

          <div>
            <Button name="Excluir filme" />
            <Button name="Salvar alterações" />
          </div>




        </main>
      </Content>
    </Container>
  )
}