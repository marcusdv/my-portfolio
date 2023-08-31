import '../styles/contacts.css'
import { useState, useRef } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    // Dados da pessoa que enviou email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [feedback, setFeedback] = useState({ mensagem: '' });

    const meuNumero = '986594041';
    const meuEmail = 'marcus.vinicius.bittencourt.c@gmail.com';

    const data = [
        { icon: <MdOutlineEmail />, title: 'Email', contact: 'email@gmail.com', link: `mailto:${meuEmail}` },
        { icon: <MdOutlineEmail />, title: 'Whatsapp', contact: '(71)986594041', link: `https://api.whatsapp.com/send?phone=${meuNumero}` }
    ]

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);


    const renderedContacts = data.map(({ icon, title, contact, link }) => {
        return <article key={title} className='contact_option'>
            <span className='icon_span'>{icon}</span>
            <h4>{title}</h4>
            <h5>{contact}</h5>
            <a href={link} target="_blank" rel="noopener noreferrer">Mande uma message</a>
        </article>

    })


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i4kbkbe', 'template_3urgh7e', form.current, 'jBal0N3virTS3xMuC')
            .then((result) => {
                console.log(result.text);
                if (result.text) setFeedback({ mensagem: <span className='enviado'>Enviado!</span> })
            }, (error) => {
                console.log(error.text);
                setFeedback({ mensagem: <span className='erro'>Erro!</span> });
            });

        setName('');
        setEmail('');
        setMessage('');
    };


    return <section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className='contact_container'>

            <div className='contact_options'>

                {renderedContacts}

            </div>

            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' value={name} onChange={handleNameChange} placeholder='Seu nome completo' required />
                <input type='email' name='email' value={email} onChange={handleEmailChange} placeholder='Seu Email' required />
                <textarea rows="7" name='message' onChange={handleMessageChange} value={message} placeholder="Sua messagem" required />
                <div className='div_botao_e_span_de_envio'>
                    <input type="submit" value="Send" className='btn btn-primary' />
                    {feedback.mensagem}
                </div>
            </form>

        </div>
    </section>
}

export default Contact;