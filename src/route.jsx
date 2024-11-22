import Error from './pages/error';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function RoutesApp (){
    return(
    <Router>
            <Routes>
                <Route path="/portfolio" element={<Home />}/>
                <Route path="/abouts" element={<Home />}/>
                <Route path="/skills" element={<Home />}/>
                <Route path="/projects" element={<Home />}/>
                <Route path="/contacts" element={<Home />}/>
                <Route path ="*" element={<Error/>}/>
            </Routes>
    </Router>
    )
}
export default RoutesApp