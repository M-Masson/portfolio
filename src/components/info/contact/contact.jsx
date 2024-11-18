import '../contact/style/contact.css'
import imageGithub from '../../../assets/svg/skills/logo/github.svg'
import imageLinkedIn from '../../../assets/svg//contact/linkedin-brands-solid.svg'
import imagePhone from '../../../assets/svg/contact/phone.svg'
import imageMail from '../../../assets/svg/contact/mail.svg'

function Contact (){
    return(
        <div id="contact" className='side-div'>
            <div id="contact-page">
                <h2>Contact</h2>
                <div id='contact-app'>
                        <a href="https://www.linkedin.com/in/morgan-masson/" target='_blank' id='linkedin' className='contact-elements'>
                            <img src= {imageLinkedIn} alt="logo LinkedIn" />
                        </a>
                        <a href="https://github.com/M-Masson" target='_blank' id='github' className='contact-elements'>
                            <img src= {imageGithub} alt="logo GitHub" />
                        </a>
                </div>
                <div id='contact-join'>
                    <a id='mail' className='contact-elements' href="mailto:morgan.masson006@gmail.com"><img src={imageMail} alt="logo mail" /></a>
                    <a id='phone' href="" className='contact-elements'><img src={imagePhone} alt="logo phone" /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact