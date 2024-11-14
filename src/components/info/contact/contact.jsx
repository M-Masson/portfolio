import '../contact/style/contact.css'

function Contact (){
    return(
        <div id="contact">
            <h2>Contact</h2>
            <div id='contact-app'>
                <a href="https://www.linkedin.com/in/morgan-masson/" target='_blank' id='linkedin'><img src="" alt="logo LinkedIn" /></a>
                <a href="https://github.com/M-Masson" target='_blank' id='github'><img src="" alt="logo GitHub" /></a>
            </div>
            <div id='contact-infos'>
                <div id='email'>
                    <p className='infos-title'>Email:</p>
                    <p className='infos-txt'>morgan.masson006@gmail.com</p>
                </div>
                <div id='phone'>
                    <p className='infos-title'>Téléphone:</p>
                    <p className='infos-txt'>+33 7 82 37 43 16</p>
                </div>
            </div>
            
        </div>
    )
}

export default Contact