import About from "./about/about";
import React from "react";
import { useLocation } from "react-router-dom";
import Skills from "./skills/skills";
import Projects from "./projets/projets";
import '../info/info.css'
import Contact from "./contact/contact";

const navigation = [
   {title: About, path: "portfolio", path2:"abouts"},
   {title: Skills, path: "skills"},
   {title: Projects, path: "projects"},
   {title: Contact, path: "contacts"}
]

function Infos(){
    const location = useLocation()
    return(
            <div id="container-1">
                {navigation.map((item, index)=>{
                    const isActive = location.pathname === `/${item.path}` || (item.path2 ?location.pathname === `/${item.path2}` : false)
                    return(
                        <div id="containers" key={index} className={isActive ? "fade-in" : "fade-out"}>
                            
                            <item.title/>
                        </div>
                    )
                })}
            </div>
    )
}

export default Infos