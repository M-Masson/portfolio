import '../projets/style/projet.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const tagsP1 = [
    {name: "Html"},
    {name: "Css"}
]
const tagsP2 = [
    {name: "Html"},
    {name: "Css"},
    {name: "JavaScript"}
]
const tagsP3 = [
    {name: "Html"},
    {name: "JavaScript"},
    {name: "Sass"}
]
const tagsP4 = [
    {name: "JavaScript"},
    {name: "NodeJS"}
]

const project = [
    {title: "Projet 1", description: "description du projet numéro un", tags: tagsP1, img:"", path:"https://github.com/M-Masson/projet-booki"},
    {title: "Projet 2", description: "description du projet numéro deux", tags: tagsP2, img:"", path:"https://github.com/M-Masson/projet-architecte"},
    {title: "Projet 3", description: "description du projet numéro trois", tags: tagsP3, img:"", path:"https://github.com/M-Masson/projet-kasa"},
    {title: "Projet 4", description: "description du projet numéro quatre", tags: tagsP4, img:"", path:"https://github.com/M-Masson/projet-vieux-grimoire"}
]

function Projects(){
    const location = useLocation();
    const isActive = location.pathname === '/projects'
    return(
        <div id='projet-div'>
            <h2 id='projet-h2'>Projets</h2>
            <div id='projects-all'>
            {project.map((item, index)=>{
                return(
                    <Link id= {`projet-${index}`} className='projets' to={item.path} target='_blank' key={index}>
                        <div id={`image-${index}`} className={`projet-img-${isActive ? 'on' : 'off'}`}></div>
                        <p id={`title-${index}`} className={`title-${isActive ? 'on' : 'off'}`}>{item.title}</p>
                        <p id={`description-${index}`} className='description'>
                            {item.description}
                            <span id='tags-all'>
                                {item.tags.map((item, index)=>{
                                    return(
                                        <span key={index} id={`tags-${item.name}`}>{`#${item.name}`}</span>
                                    )
                                })}
                            </span>
                        </p>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}
export default Projects