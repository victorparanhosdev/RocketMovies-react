import { Container, Content, Film, Icons, Tags, Autor } from "./styles";
import { HeaderOffInput } from "../../Componentes/HeaderOffInput";
import { ButtonText } from "../../Componentes/ButtonText";
import { Tag } from "../../Componentes/Tag";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function Movie() {
  const { user, signOut } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  function toBack() {
    navigate(-1);
  }
  function toBackAuth() {
    navigate("/");
    signOut();
  }

  async function removeNotes(id) {
    const isOk = confirm("Tem certeza que deseja excluir?");
    if (isOk) {
      await api.delete(`/notes/${id}`);
      toBack();
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNotes();
  }, []);
  return (
    <Container>
      <HeaderOffInput />
      <Content>
        <ButtonText onClick={toBack} icon={FiArrowLeft} name="Voltar" />
        <Film>
          {(() => {
            switch (data.rating) {
              case "1/5":
                return (
                  <Icons>
                    <h2>{data.title}</h2>
                    <AiFillStar key={1} />
                    <AiOutlineStar key={2} />
                    <AiOutlineStar key={3} />
                    <AiOutlineStar key={4} />
                    <AiOutlineStar key={5} />
                  </Icons>
                );

              case "2/5":
                return (
                  <Icons>
                    <h2>{data.title}</h2>
                    <AiFillStar key={1} />
                    <AiFillStar key={2} />
                    <AiOutlineStar key={3} />
                    <AiOutlineStar key={4} />
                    <AiOutlineStar key={5} />
                  </Icons>
                );
              case "3/5":
                return (
                  <Icons>
                    <h2>{data.title}</h2>
                    <AiFillStar key={1} />
                    <AiFillStar key={2} />
                    <AiFillStar key={3} />
                    <AiOutlineStar key={4} />
                    <AiOutlineStar key={5} />
                  </Icons>
                );
              case "4/5":
                return (
                  <Icons>
                    <h2>{data.title}</h2>
                    <AiFillStar key={1} />
                    <AiFillStar key={2} />
                    <AiFillStar key={3} />
                    <AiFillStar key={4} />
                    <AiOutlineStar key={5} />
                  </Icons>
                );
              case "5/5":
                return (
                  <Icons>
                    <h2>{data.title}</h2>
                    <AiFillStar key={1} />
                    <AiFillStar key={2} />
                    <AiFillStar key={3} />
                    <AiFillStar key={4} />
                    <AiFillStar key={5} />
                  </Icons>
                );
              default:
                return (
                  <Icons>
                    <h2>{data.title}</h2>
                    <AiOutlineStar key={1} />
                    <AiOutlineStar key={2} />
                    <AiOutlineStar key={3} />
                    <AiOutlineStar key={4} />
                    <AiOutlineStar key={5} />
                  </Icons>
                );
            }
          })()}
          <Autor>
            <span>
              <img src={avatarURL} alt="foto-perfil" />
              Por {user.name}
            </span>

            <span>
              <BiTime />
              <span>{data.updated_at}</span>
            </span>
          </Autor>

          <Tags>
            {data.tags &&
              data.tags.map((tag) => {
                return <Tag key={String(tag.id)} name={tag.name} />;
              })}
          </Tags>

          <p>{data.description}</p>
          <div>
            <button onClick={() => removeNotes(data.id)} type="button">
              Excluir Filme
            </button>
          </div>
        </Film>
      </Content>
    </Container>
  );
}
