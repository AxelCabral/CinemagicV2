import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="social-media-container">
                <ul className='social-links-information'>
                    <li><a href="#"><span className='icon fa-facebook'><FontAwesomeIcon icon={faFacebook} /></span><span className="title">Facebook <strong>/cinemagicoficial</strong></span></a></li>
                    <li><a href="#"><span className='icon fa-twitter'><FontAwesomeIcon icon={faTwitter} /></span><span className="title">Twitter <strong>/cinemagicoficial</strong></span></a></li>
                    <li><a href="#"><span className='icon fa-instagram'><FontAwesomeIcon icon={faInstagram} /></span><span className="title">Instagram <strong>/cinemagicoficial</strong></span></a></li>
                    <li><a href="#"><span className='icon fa-youtube'><FontAwesomeIcon icon={faYoutube} /></span><span className="title">Youtube <strong>/cinemagicoficial</strong></span></a></li>
                    <li><a href="#"><span className='icon fa-linkedin'><FontAwesomeIcon icon={faLinkedin} /></span><span className="title">Linkedin <strong>/cinemagicoficial</strong></span></a></li>
                </ul>
            </div>
            <hr className="hr-color-cinemagic" />
            <div className="more-information">
                <div className="logo-container logo-footer">
                    <a href="#"><span className="logo">CineMagic</span></a>
                </div>
                <p>Copyright © 2022 Cinemagic</p>
                <ul className='links-information'>
                    <li><a href="#">Política de privacidade</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                </ul>
            </div>
        </footer>
    )
}