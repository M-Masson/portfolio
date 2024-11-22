import Error from './pages/error';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function RoutesApp (){
    return(
    <Router>
            <Routes>
                <Route path="/portfolio/" element={<Home />}/>
                <Route path="/portfolio/#portfolio/" element={<Home />}/>
                <Route path="/portfolio/#abouts" element={<Home />}/>
                <Route path="/portfolio/#skills" element={<Home />}/>
                <Route path="/portfolio/#projects" element={<Home />}/>
                <Route path="portfolio/#contacts" element={<Home />}/>
                <Route path ="/portfolio/*" element={<Error/>}/>
            </Routes>
    </Router>
    )
}
export default RoutesApp