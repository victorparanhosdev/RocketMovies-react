import { Container, Content, Text} from "./styles"

import { ButtonText } from "../../Componentes/ButtonText"
import { FiArrowLeft } from "react-icons/fi"
import { IoMdClose, IoMdAdd } from "react-icons/io"
import { Input } from "../../Componentes/Input"
import { Button } from "../../Componentes/Button"
import { Section } from "../../Componentes/Section"
import {NewItem} from "../../Componentes/NewItem"
import { api } from "../../services/api"
import { useState } from "react"
import { InputAdd } from "../../Componentes/InputAdd";
import { useNavigate } from "react-router-dom"
import { HeaderOffInput } from "../../Componentes/HeaderOffInput"
export function NewMovie() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")

  async function handleSaveMovie(){
    if(!title) {
      return alert("Por favor preencha o Titulo do Filme")
    }
    if(!description) {
      return alert("Por favor preencha a Descrição do Filme")
    }
    if(!rating) {
      return alert("Por favor preencha a Nota do Filme")
    }
    if(tags.length == 0){
      return alert("Adicione pelo menos uma tag")
    }
    if(newTags){
      return alert("Você digitou os dados, mas não adicionou")
    }
    
    try{
      await api.post("/notes", {title, description, rating, tags})
      alert("Filme Criado com sucesso!!")
      navigate(-1)

    }catch (error){
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possivel Salvar")
      }
    }
    
  }

  function AddnewLink(){
    if(newTags == ""){
      return alert("Para adicionar um item, vocÊ precisa informar algum dado")
    }

    setTags(prevState=> [...prevState, newTags])
    setNewTags("")

  }

  async function removeLink(deleted){
    setTags(prevState => prevState.filter(link => link !== deleted))

  }
  
  return (
    <Container>
      <HeaderOffInput />

      <Content>
        <ButtonText to="/" icon={FiArrowLeft} name="Voltar" />
        <main>
          <h1>Novo Filme</h1>

          <Text>

            <div>
              <Input type="text" onChange={e=> setTitle(e.target.value)} placeholder="Titulo" />
              <Input type="text" onChange={e=> setRating(e.target.value)} placeholder="Sua nota (de 0 a 5)" />
            </div>

            <textarea onChange={e=> setDescription(e.target.value)} placeholder="Observação" name="" id="" rows="3"></textarea>
          </Text>
          
          <Section title="Marcadores">
            {tags &&
            tags.map((link, index) => <NewItem key={String(index)} name={link} onClick={()=> removeLink(link)} ico={IoMdClose}/>)
            }
            <InputAdd value={newTags} onChange={e=> setNewTags(e.target.value)} onClick={AddnewLink} ico={IoMdAdd} placeholder="Novo Marcador"/>
          </Section>

          <div>
            <Button onClick={handleSaveMovie} name="Salvar alterações" />
          </div>




        </main>
      </Content>
    </Container>
  )
}