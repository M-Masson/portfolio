import './style/profil.css'
function Profil(){
    return(
        <div id="profil">
            <div id="profil1"></div>
            <div id="profil2">
                <div id='identite'>
                    <p id='name'>Morgan MASSON</p>
                    <p id='domaine'>Développeur Web</p>
                </div>
                <div id='btn-profil'>
                    <div id='btn-cv'>
                        CV
                    </div>
                    <div id='btn-contact'>
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profil