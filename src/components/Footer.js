import '../styles/footer.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return <footer>
        <a href="#d" className="footer_logo">Marcus Costa</a>

        <ul className='permalinks'>
            <li href="#header"><a href="#header">Home</a></li>
            <li href="#about"><a href="#about">About</a></li>
            <li href="#projects"><a href="#projects">Projetos</a></li>
            <li href="#header"><a href="#experience">Experiência</a></li>
            <li href="#header"><a href="#contact">Contato</a></li>
        </ul>

        <div className='footer_socials'>
            <a href='https://facebook.com'><FaInstagram /></a>
            <a href=''><FaWhatsapp /></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; Marcus Costa. All rights reserved.</small>
        </div>
    </footer>
}

export default Footer;