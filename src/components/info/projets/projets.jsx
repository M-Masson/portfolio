import '../projets/style/projet.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import imgP1 from '../../../assets/img/projets/projet-booki.png'
import imgP2 from '../../../assets/img/projets/projet-photographe.png'
import imgP3 from '../../../assets/img/projets/projet-kasa.png'
import imgP4 from '../../../assets/img/projets/projet-vieux-grimoire.png'
import imgP5 from '../../../assets/img/projets/projet-danews.png'
import imgP6 from '../../../assets/img/projets/projet-lombrary.png'


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
    {name: "React"},
    {name: "Sass"}
]
const tagsP4 = [
    {name: "JavaScript"},
    {name: "NodeJS"}
]

const tagsP5 =[
    {name:"Angular"},
    {name: "Java"},
    {name: "TypeScript"},
    {name: "Css"}
]
const tagsP6 =[
    {name:"React"},
    {name: "Java"},
    {name: "JavaScript"},
    {name: "Css"}
]

const project = [
    {title: "Bibliothèque : Lombrary", description: "Dans ce projet, j'ai collaboré avec un UI/UX Designer afin de créer une application de bibliothèque personnelle. Ce projet m'a permis de faire ma première mise en ligne d'une application avec une base de donnée.", tags: tagsP6, img: imgP6, path: "https://lombrary-front.vercel.app/"},
    {title: "NewsLetter : Danews", description: "Dans ce projet, j'ai développé une application web de newsletter au sein d'une équipe de 4 développeurs. J'ai également découvert et pris en main le langage Java pour le back ainsi que le framework Angular pour le front", tags: tagsP5, img: imgP5, path:"https://danews.fr/"},
    {title: "Location immobilière : Kasa", description: "Au cours de ce projet, j'ai développé une application web de location immobilière. J’ai également découvert et pris en main le React, que j’ai immédiatement apprécié.", tags: tagsP3, img: imgP3, path:"https://github.com/M-Masson/projet-kasa"},
    {title: "Portfolio d'une architecte", description: "Au cours de ce projet, j'ai développé dynamiquement le portfolio d'une architecte. Le plus grand challenge à été la gestion du Backend, grâce aux requêtes fetch j’ai compris comment interagir avec ce dernier.", tags: tagsP2, img: imgP2, path:"https://github.com/M-Masson/projet-architecte"},
    {title: "Site de notation de livre", description: "Pendant ce projet, j’ai développé le Backend d’un site de notation de livre. La plus grande difficulté était la compréhension et l’utilisation de NodeJS.", tags: tagsP4, img: imgP4, path:"https://github.com/M-Masson/projet-vieux-grimoire"},
    {title: "Agence de voyage : Booki", description: "Dans ce projet, j'ai développé la page d'accueil d'une agence de voyage. La mise en place du responsive a été un défi, mais j'ai su adapter mon raisonnement pour rendre le site compatible avec tous les appareils.", tags: tagsP1, img: imgP1, path:"https://m-masson.github.io/projet-booki/"},


]

function Projects(){
    const location = useLocation();
    const isActive = location.pathname === '/portfolio/' & location.hash === "#projects"
    return(
        <div id='projet-div'>
            <h2 id='projet-h2'>Projets</h2>
            <div id='projects-all'>
            {project.map((item, index)=>{
                return(
                    <Link id= {`projet-${index}`} className='projets' to={item.path} target='_blank' key={index}>
                        <div id={`image-${index}`} className={`projet-img-${isActive ? 'on' : 'off'}`}>
                            <img src={item.img} alt="aperçu du projet" />
                        </div>
                        <p id={`title-${index}`} className={`title-${isActive ? 'on' : 'off'}`}>{item.title}</p>
                        <p id={`description-${index}`} className={`description-${isActive ? 'on' : 'off'}`}>
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