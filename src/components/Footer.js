import '../styles/footer.css'

function Footer() {
    return <footer>
        <a href="#d" className="footer_logo">Marcus Costa</a>

        <ul className='permalinks'>
            <li href="#header">Home</li>
            <li href="#about">About</li>
            <li href="#projects">Projetos</li>
            <li href="#header">Experiência</li>
            <li href="#header">Contato</li>
        </ul>

        <div className='footer_socials'>
            <a href='#linkedin.com'>Linkedin</a>
            <a href='#linkedin.com'>Linkedin</a>
            <a href='#linkedin.com'>Linkedin</a>
        </div>
    </footer>
}

export default Footer;