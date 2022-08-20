import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function () {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current)
      emailjs.sendForm('service_eflb5a5', 'template_518pojt', form.current, '_0V4Tqd2xJSABlV8N')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='description border border-white border-2 d-flex justify-content-center '>
            <form ref={form} onSubmit={sendEmail} className='d-flex flex-column'>
                <label>Name</label>
                <input type="text" name="user_name" className='mb-3'/>
                <label>Email</label>
                <input type="email" name="user_email" className='mb-3'/>
                <label>Message</label>
                <textarea name="message"/>
                <input type="submit" value="Send" className='mt-2'/>
            </form>
        </div>
    )
}