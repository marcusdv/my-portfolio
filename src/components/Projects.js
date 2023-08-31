import '../styles/projects.css'
import IMG1 from '../assets/portfolio1.jpg';
import IMG2 from '../assets/portfolio2.jpg';
import IMG3 from '../assets/portfolio3.jpg';
import IMG4 from '../assets/portfolio4.jpg';
import IMG5 from '../assets/portfolio5.png';
import IMG6 from '../assets/portfolio6.jpg';

function Projects() {
    const projects = [
        { img: IMG1, title: 'Project title', github: 'https://github.com', liveDemo: '' },
        { img: IMG2, title: 'Project title', github: 'https://github.com', liveDemo: '' },
        { img: IMG3, title: 'Project title', github: 'https://github.com', liveDemo: '' },
        { img: IMG4, title: 'Project title', github: 'https://github.com', liveDemo: '' },
        { img: IMG5, title: 'Project title', github: 'https://github.com', liveDemo: '' },
        { img: IMG6, title: 'Project title', github: 'https://github.com', liveDemo: '' },
    ];


    const renderedItems = projects.map(({ img, title, github, liveDemo }) => {
        return (
            <article key={img} className="project_item">
                <div className='project_item_image'>
                    <img src={img} alt='' />
                </div>
                <h3>{title}</h3>
                <div className='project_item_cta'>
                    <a href={github} className="btn">Github</a>
                    <a href={liveDemo} className="btn btn-primary">Live Demo</a>
                </div>
            </article>
        )
    });

    return <section id="projects">

        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className="project_container">
            {renderedItems}
        </div>

    </section>
}


export default Projects;