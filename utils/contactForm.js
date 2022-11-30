import { useState } from 'react'
import styles from '../styles/formStyle.module.css'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
        name,
        email,
        message,
        };
        console.log(data);
        const res = fetch('/api/contact',{
            method: 'POST',
            body: JSON.stringify(data),
        })
        const { err } = res.json();
        if(err) {
            console.log(err)
            return
        }
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                onChange={e => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                type="text"
                rows="4"
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactForm