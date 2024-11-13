import About from "./about/about";
import React from "react";
import { useLocation } from "react-router-dom";
import Skills from "./skills/skills";
import Projects from "./projets/projets";
import '../info/info.css'

const navigation = [
   {title: About, path: "abouts"},
   {title: Skills, path: "skills"},
   {title: Projects, path: "projects"}
]

function Infos(){
    const location = useLocation()
    return(
            <div id="container-1">
                {navigation.map((item, index)=>{
                    const isActive = location.pathname === `/${item.path}`
                    return(
                        <div id="containers" key={index} className={isActive ? "fade-in" : "fade-out"}>
                            {/* {isActive ? <item.title/> : ""} */}
                            <item.title/>
                        </div>
                    )
                })}
            </div>
    )
}

export default Infos