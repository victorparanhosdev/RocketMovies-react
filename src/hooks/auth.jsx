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
    async function updateProfile({name, email, passwordNew, passwordOld, avatarFile}){

        try{
            if(passwordNew && !passwordOld || !passwordNew && passwordOld){
                return alert("Para alterar a senha é preciso preencher os dois campos")
            }
            if(avatarFile) {
                const fileForm = new FormData()
                fileForm.append("avatar", avatarFile)
                await api.patch("/users/avatar", fileForm)

            }
         
            const response = await api.put("/users", {name, email, password: passwordNew, old_password: passwordOld})
            
            const {user} = response.data
           
            setData({user, token: data.token})
            localStorage.setItem("rocketmovies@user:", JSON.stringify(user)); 
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