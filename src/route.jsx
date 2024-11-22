import Error from './pages/error';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const path = "/portfolio"

function RoutesApp (){
    return(
    <Router>
            <Routes>
                <Route path={`${path}/`} element={<Home />}/>
                <Route path={`${path}/abouts`} element={<Home />}/>
                <Route path={`${path}/skills`} element={<Home />}/>
                <Route path={`${path}/projects`} element={<Home />}/>
                <Route path={`${path}/contacts`} element={<Home />}/>
                <Route path ="*" element={<Error/>}/>
            </Routes>
    </Router>
    )
}
export default RoutesApp