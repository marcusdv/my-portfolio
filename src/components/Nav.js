import '../styles/nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone, AiOutlineStar } from 'react-icons/ai'
import { IoMdCodeWorking } from 'react-icons/io'
import { useState } from 'react';
import Link from './Link'

function Nav() {
    const [activeNav, setActiveNav] = useState('#header')

    const links = [
        { label: 'header_section', path: '#header', content: <AiOutlineHome /> },
        { label: 'about_section', path: '#about', content: <AiOutlineUser /> },
        { label: 'projects_section', path: '#projects', content: < IoMdCodeWorking /> },
        { label: 'experience_section', path: '#experience', content: <AiOutlineStar /> },
        { label: 'contact_section', path: '#contact', content: < AiOutlinePhone /> }
    ]

    const renderedLinks = links.map(link => {
        const handleLinkClick = () => setActiveNav(link.path)

        return <Link
            to={link.path}
            key={link.label}
            onClick={handleLinkClick}
            className={activeNav === link.path ? 'active' : ''}
        >
            {link.content}
        </Link>
    })

    return <nav>
        {renderedLinks}
    </nav>
}

export default Nav;