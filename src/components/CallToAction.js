import CURRICULO from '../assets/cv.pdf'

function CallToAction() {
    return (
        <div className='cta'>
            <a href={CURRICULO} download className='btn'>Baixar Currículo</a>
            <a href="#contact" className='btn btn-primary'>Vamos Conversar!</a>
        </div>
    )
}

export default CallToAction;