import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    function signOut(){
        localStorage.removeItem("rocketmovies@user:")
        localStorage.removeItem("rocketmovies@token:")
        setData({})
    }
    async function updateProfile({user, avatarFile}){


        try{
            if(user.password && !user.old_password || !user.password && user.old_password){
                return alert("Para alterar a senha é preciso preencher os dois campos")
            }
            if(avatarFile) {
                const fileForm = new FormData()
                fileForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileForm)
                user.avatar = response.data.avatar
            }
         
            await api.put("/users", user)
            
            const {password, old_password, ...userData} = user
           
            setData({user, token: data.token})
            localStorage.setItem("rocketmovies@user:", JSON.stringify(userData)); 
            alert("Perfil Atualizado")
            

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert("Não foi possivel Atualizar os Dados")
            }
        }

    }

    async function signIn({email, password}){
        try{
            if(!email && !password){
                return alert("Por favor, preencha todos campos")
            }
            
             const response = await api.post("/sessions", {email, password})
          
             const {user, token } = response.data;

            localStorage.setItem("rocketmovies@user:", JSON.stringify(user))
            localStorage.setItem("rocketmovies@token:", token)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel Acessar")
            }
        }

    }

    useEffect(()=> {
        const token = localStorage.getItem("rocketmovies@token:")
        const user = JSON.parse(localStorage.getItem("rocketmovies@user:"))
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setData({token, user})

    }, [])

    return(
        <AuthContext.Provider value={{updateProfile, signOut, signIn, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export {AuthProvider, useAuth}