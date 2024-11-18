import './style/profil.css'
function Profil(){
    return(
        <div id="profil">
            <div id="profil1"></div>
            <div id="profil2">
                <div id='identite'>
                    <p id='name'>Morgan MASSON</p>
                    <p id='domaine'>{"<developpeur_web/>"}</p>
                </div>
                <div id='btn-profil'>
                    <div id='btn-cv'>
                        CV
                    </div>
                    <a id='btn-contact' href='/contacts'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Profil