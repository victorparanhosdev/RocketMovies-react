import { Container, Content, Tags, Icons, Section, HeaderOn, Profile } from "./styles"
import { Button } from "../../Componentes/Button"
import {RiAddLine} from 'react-icons/ri'
import {Tag} from "../../Componentes/Tag"
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import {useAuth} from "../../hooks/auth"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useNavigate, Link } from "react-router-dom"
import {Input} from "../../Componentes/Input"
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

export function Home(){
    const {user, signOut} = useAuth()
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder 

    function backTo(){
        navigate("/")
        signOut()
    }
    function handleExpandCard(id){
        navigate(`/movie/${id}`)
    }

    useEffect(()=> {
      async function fetchNotes(){
        const response = await api.get(`/notes?title=${search}&tags=${[]}`)
        setData(response.data)
        
      }
  
      fetchNotes()
    }, [search])


    return(
        <Container>

        <HeaderOn>
            <div>
            <h1>ReactMovies</h1>
            <Input onChange={e=> setSearch(e.target.value)} placeholder="Pesquisar pelo titulo"/>
            <Profile>
                <div>
                    <span>{user.name}</span>
                    <button type="button" onClick={backTo} to="/">sair</button>
                </div>
                <Link to="/profile"><img src={avatarURL} alt={`foto do perfil de ${user.name}`} /></Link>
            </Profile>
            </div>
        </HeaderOn>
   
            <Content>
                <div>
                <h1>Meus Filmes</h1>
               <Button to="/addmovie" icon={RiAddLine} name="Adicionar filme"/>
                
                </div>

                <Section>
                    {
                    data && data.map((note) => {
                        return <div key={String(note.id)}>
                       <button onClick={()=> handleExpandCard(note.id)} type="button">
                       <h2>{note.title}</h2>
                       <Icons>
           
                       <AiFillStar />
                       <AiFillStar />
                       <AiFillStar />
                       <AiFillStar />
                       <AiOutlineStar />
                       </Icons>

                       <p>{note.description}</p>
                       <Tags>
                        {
                            note.tags && note.tags.map(tag =><Tag key={tag.id} name={tag.name}/>)
                        }
           
                 
                       </Tags>
               
                       
                       </button>
                   </div>   
                    })
                       
                    }                 
                </Section>




            </Content>

        </Container>
    )
}