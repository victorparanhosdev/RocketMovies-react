import { Route, Routes } from "react-router-dom";

import {Home} from '../pages/Home'
import {Profile} from '../pages/Profile'
import {Movie} from '../pages/Movie'
import {NewMovie} from '../pages/NewMovie'

export function UserRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/movie" element={<Movie/>} />
            <Route path="/addmovie" element={<NewMovie/>} />
     
        </Routes>

    )
}