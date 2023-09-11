import { Container, Content, Tags, Icons } from "./styles"
import { Header } from "../../Componentes/Header"
import { Button } from "../../Componentes/Button"
import {RiAddLine} from 'react-icons/ri'
import {Tag} from "../../Componentes/Tag"
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
export function Home(){
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
  
    useEffect(()=> {
      async function fetchNotes(){
        const response = await api.get(`/notes?title=${[]}&tags=${[]}`)
        console.log(response.data)
      }
  
      fetchNotes()
    }, [])


    return(
        <Container>
            <Header />
            <Content>
                <div>
                <h1>Meus Filmes</h1>
               <Button to="/addmovie" icon={RiAddLine} name="Adicionar filme"/>
                
                </div>

                <section>
                    <div>
                        <Link to="/movie">
                        <h2>Interestellar</h2>
                        <Icons>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        </Icons>

                        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>
                        <Tags>
                        <Tag name="Ficção Cientifica"/>
                        <Tag name="Drama"/>
                        <Tag name="Familia"/>
                        </Tags>
                
                        
                        </Link>
                    </div>               
                 
                </section>




            </Content>

        </Container>
    )
}