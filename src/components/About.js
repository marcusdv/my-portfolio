import '../styles/about.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BsPersonCheckFill } from 'react-icons/bs'
import Link from './Link'

import MEABOUT from '../assets/me-about.jpg'

function About() {
    return <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="about_container">
            <div className="about_me">
                <div className="about_me_image">
                    <img src={MEABOUT} alt="Minha foto que gira" />
                </div>
            </div>

            <div className='about_content'>
                <div className='about_cards'>

                    <article className='about_card'>
                        <FaAward className='about_icon' />
                        <h5>Experience</h5>
                        <small>0+ years </small>
                    </article>

                    <article className='about_card'>
                        <BsPersonCheckFill className='about_icon' />
                        <h5>Clientes</h5>
                        <small>0 Clientes Pelo Mundo </small>
                    </article>

                    <article className='about_card'>
                        <VscFolderLibrary className='about_icon' />
                        <h5>Project</h5>
                        <small>0 Completos </small>
                    </article>

                </div>

                <p>
                    lorem ipsum dolor sit amet, consectetur adipis occ lorem
                    ipsum dolor sit amet, consectetur adipis occ lorem ipsum
                    ipsum dolor sit amet, consectetur adipis occ lorem ipsum
                    ipsum dolor sit amet, consectetur adipis occ lorem ipsum
                    dolor sit amet, consectetur adipis occ lorem ipsum dolor sit
                    amet, consectetur adipis occ
                </p>
                <Link to={'#contact'} className={'btn btn-primary'}> Let's Talk</Link>

            </div>
        </div>
    </section >
}

export default About;