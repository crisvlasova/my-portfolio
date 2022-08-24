import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../StyleSheets/GetInTouch.css'

export default function () {
    let form = useRef();

    let styles = 'mb-3 ps-2'

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current)
      emailjs.sendForm('service_eflb5a5', 'template_518pojt', form.current, '_0V4Tqd2xJSABlV8N')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      alert('Your message has been sent successfully!')
    };

    return (
        <div className='description border border-white border-2 d-flex justify-content-center'>
            <form ref={form} onSubmit={sendEmail} className='d-flex flex-column'>
                <label>From: </label>
                <input type="text" name="user_name" placeholder='Your name' className={styles}/>
                <label>Email: </label>
                <input type="email" name="user_email" placeholder='Your Email' className={styles}/>
                <label>Message: </label>
                <textarea className={`textarea ${styles}`} name="Your message" placeholder='Message' cols='30' rows='6'/>
                <input type="submit" value="Send" className='navbar-button mt-2 border border-white border-2'/>
            </form>
        </div>
    )
}