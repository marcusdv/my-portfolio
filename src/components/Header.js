import "../styles/header.css";
import CallToAction from "./CallToAction";
import mephoto from '../assets/me2.png'
import HeaderSocials from "./HeaderSocials";

function Header() {
    return <header id="header">
        <div className="header_container" >
            <h5> Olá, eu sou </h5>
            <h1> Marcus Costa </h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CallToAction />
            <HeaderSocials />

            <div className="me">
                <img src={mephoto} alt="Pessoa no meio da tela" />
            </div>

            <a href="#about" className="scroll_down">
                Scroll Down
            </a>
        </div>
    </header>

}

export default Header;