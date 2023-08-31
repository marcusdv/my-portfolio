import { BsLinkedin, BsGithub } from 'react-icons/bs';

function HeaderSocials() {
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" target=""><BsLinkedin /></a>
            <a href="https://github.com" target=""><BsGithub /></a>
        </div >
    )
}

export default HeaderSocials;