import { Container, Content, Film, Icons, Tags, Autor} from "./styles"
import { HeaderOffInput } from "../../Componentes/HeaderOffInput"
import { ButtonText } from "../../Componentes/ButtonText"
import { Tag } from "../../Componentes/Tag"
import { FiArrowLeft } from "react-icons/fi"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import {BiTime} from "react-icons/bi"
import { useAuth } from "../../hooks/auth"
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
export function Movie() {
  const {user, signOut} = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder 
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  function toBack(){
    navigate(-1)
  }
  function toBackAuth(){
    navigate("/")
    signOut()
  }

  async function removeNotes(id){
    const isOk = confirm("Tem certeza que deseja excluir?")
    if(isOk) {
      await api.delete(`/notes/${id}`)
      toBack()
    }
    
  }

  useEffect(()=> {
    async function fetchNotes(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  },[])
  return (
    <Container>
      <HeaderOffInput/>
      <Content>
        <ButtonText onClick={toBack} icon={FiArrowLeft} name="Voltar" />
        <Film>
          <Icons>
          <h2>{data.title}</h2>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </Icons>

          <Autor>
            
            <span><img src={avatarURL} alt="foto-perfil" />Por {user.name}</span>
            
            <span><BiTime /><span>{data.updated_at}</span></span>
            
          </Autor>

      
            <Tags>
            {
              data.tags && data.tags.map(tag=> {
                return <Tag key={String(tag.id)} name={tag.name} />
              })
            }
          </Tags>

          <p>{data.description}</p>
          <div>
            <button onClick={()=> removeNotes(data.id)} type="button">Excluir Filme</button>
          </div>
        </Film>
           


      </Content>




    </Container>

  )

}