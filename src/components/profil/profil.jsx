import './style/profil.css'
import photoProfil from '../../assets/img/photo-profil.jpg'
import cv from '../../assets/cv/cv-morgan_masson.pdf'
import { Link } from 'react-router-dom'
function Profil(){
    return(
        <div id="profil">
            <div id="profil1">
                <img id= "photo-profil" src={photoProfil} alt="photo de profil" />
            </div>
            <div id="profil2">
                <div id='identite'>
                    <p id='name'>Morgan MASSON</p>
                    <p id='domaine'>{"<developpeur_web/>"}</p>
                </div>
                <div id='btn-profil'>
                    <a id='btn-cv' href= {cv} download="cv-morgan-masson">
                        CV
                    </a>
                    <Link id='btn-contact' to='/portfolio/#contacts'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Profil