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
import { useState } from "react"
import { InputAdd } from "../../Componentes/InputAdd";

export function NewMovie() {
  const {user} = useAuth()
  const [links, setLinks] = useState([])
  const [newlink, setNewLink] = useState("")
  function AddnewLink(){
    setLinks(prevState=> [...prevState, newlink])
    setNewLink("")
  }

  function removeLink(deleted){
    setLinks(links.filter(link => link !== deleted))
  }
  
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

          <Section title="Marcadores">
            {links.map(link => <NewItem name={link} onClick={()=> removeLink(link)} ico={IoMdClose}/>)}
            <InputAdd value={newlink} onChange={e=> setNewLink(e.target.value)} onClick={AddnewLink} ico={IoMdAdd} placeholder="Novo Marcador"/>
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