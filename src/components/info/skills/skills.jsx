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
import logoGit from '../../../assets/svg/skills/logo/git.svg'
import logoGitlab from '../../../assets/svg/skills/logo/gitlab.svg'
import logoDocker from '../../../assets/svg/skills/logo/docker.svg'
import logoBootstrap from '../../../assets/svg/skills/logo/bootstrap.svg'
import logoSwagger from '../../../assets/svg/skills/logo/swagger.svg'
import logoIntellij from '../../../assets/svg/skills/logo/intellij.svg'

const softSkills = [
    {title: "VS Code", img: logoVsCode},
    {title: "IntelliJ", img: logoIntellij},
    {title: "MongoDB", img: logoMongodb},
    {title: "Postman", img: logoPostman},
    {title: "Swagger", img: logoSwagger},
    {title: "Git", img: logoGit},
    {title: "Github", img: logoGithub},
    {title: "Gitlab", img: logoGitlab},
    {title: "Bootstrap", img: logoBootstrap},
    {title: "Docker", img: logoDocker},
    {title: "Figma", img: logoFigma},
    {title: "Notion", img: logoNotion},
]

const hardSkills =[
    {title: "JavaScript", rating: sideBar1},
    {title: "TypeScript", rating: sideBar2},
    {title: "React", rating:sideBar1},
    {title: "Angular", rating:sideBar2},
    {title: "Java", rating:sideBar3},
    {title: "Vue.Js", rating:sideBar4}
]

function Skills(){
    return(
        <div id='skill' className='side-div'>
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