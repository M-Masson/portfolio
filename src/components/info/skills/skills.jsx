import '../skills/style/skills.css'

import sideBar1 from '../../../assets/svg/skills/sidebars/sidebar-1.svg'
import sideBar2 from '../../../assets/svg/skills/sidebars/sidebar-2.svg'
import sideBar3 from '../../../assets/svg/skills/sidebars/sidebar-3.svg'
import sideBar4 from '../../../assets/svg/skills/sidebars/sidebar-4.svg'

import logoMongodb from '../../../assets/svg/skills/logo/mongodb.svg'
import logoGithub from '../../../assets/svg/skills/logo/github.svg'
import logoFigma from '../../../assets/svg/skills/logo/figma.svg'
import logoNotion from '../../../assets/svg/skills/logo/notion.svg'
import logoPostman from '../../../assets/svg/skills/logo/postman.svg'
import logoVsCode from '../../../assets/svg/skills/logo/vscode.svg'

const softSkills = [
    {title: "VisualStudio", img: logoVsCode},
    {title: "MongoDB", img: logoMongodb},
    {title: "Github", img: logoGithub},
    {title: "Figma", img: logoFigma},
    {title: "Notion", img: logoNotion},
    {title: "Postman", img: logoPostman}
]

const hardSkills =[
    {title: "Html", rating: sideBar1},
    {title: "Css", rating: sideBar1},
    {title: "JavaScript", rating: sideBar2},
    {title: "React", rating:sideBar3},
    {title: "Sass", rating:sideBar1},
    {title: "NodeJs", rating:sideBar4}
]

function Skills(){
    return(
        <div id='skill'>
            <div id='skill1'>
                <h2>Hard Skills</h2>
                <div id="sidebars">
                {hardSkills.map((item, index)=>{
                    return(
                        <div className='hard-skills' key={index}>
                            <p>{item.title}</p>
                            <img src={item.rating} alt="" id= {`sidebar-${index}`} className='hard-skills-sidebar' />
                        </div>
                    )
                })}
                </div>
            </div>
            <div id='skill2'>
                <h2>Software Skills</h2>
                <div id="icons">
                {softSkills.map((item, index)=>{
                    return(
                        <div className='soft-skills' key={index}>
                            <img src={item.img} alt="" id= {`img-${index}`} className='soft-skills-img' />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default Skills