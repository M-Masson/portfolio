import Nav from "../components/navbar/navbar"
import Profil from "../components/profil/profil"
import Infos from "../components/info/info"
import '../styles/style.css'
function Home(){
    return(
        <div id="home">
            <Nav/>
            <Profil/>
            <Infos/>
        </div>
    )
}
export default Home