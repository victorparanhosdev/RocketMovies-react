import { Route, Routes } from "react-router-dom";

import {Home} from '../pages/Home'

export function UserRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
     
        </Routes>

    )
}