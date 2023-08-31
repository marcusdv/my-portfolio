import '../styles/experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {
    const experienceFrontend = [
        { title: 'Javascript', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'HTML', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'CSS', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'ReactJS', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'Redux', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'Bootstrap', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'Tailwind', icon: <BsPatchCheckFill />, text: 'Experienced' },
    ]

    const experienceBackend = [
        { title: 'Node JS', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'Express', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'MySQL', icon: <BsPatchCheckFill />, text: 'Experienced' },
        { title: 'MongoDB', icon: <BsPatchCheckFill />, text: 'Experienced' },
    ]

    const handleExperienceMap = (arr) => {
        return arr.map(({ title, text, icon }) => {
            return <article key={title} className="experience_details">
                <div className='icon'>
                    {icon}
                </div>
                <div>
                    <h4>{title}</h4>
                    <small className='text-light'>{text}</small>
                </div>
            </article>
        })
    }


    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>

            <div className="experience_container">

                {/* FRONTEND */}
                <div className="experience_frontend">
                    <h3>FrontEnd Development</h3>
                    <div className="experience_content">
                        {
                            handleExperienceMap(experienceFrontend)
                        }
                    </div>
                </div>

                {/* BACKEND */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        {
                            handleExperienceMap(experienceBackend)
                        }

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Experience