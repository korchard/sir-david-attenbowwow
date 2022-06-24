import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';

// STYLING
import './Contact.css';

const Contact = () => {

  const [contact, setContact] = useState({ 
    name: '', 
    email: '',
    subject: '',
    message: ''
  });

  const dispatch = useDispatch();

  const sendMessage = (event) => {
    event.preventDefault();
    console.log('message', contact);
      dispatch({
        type: 'SEND_MESSAGE',
        payload: {
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          message: contact.message
        }
      });
      // Swal.fire({
      //   title: `Message Sent!`,
      //   text: `Thank you for reaching out.`,
      //   icon: 'success',
      //   heightAuto: false,
      //   confirmButtonText: 'OK',
      // })
      setContact({
        name: '', 
        email: '',
        subject: '',
        message: ''
      });
    } 

  return (
    <div className='contactItem'>
      <form onSubmit={sendMessage}>
        <div className='contactInput'>
          <label htmlFor='name'>
              name: &nbsp;
            <input
                type='text'
                name='name'
                required
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
          </label>
        </div>
        <div className='contactInput'>
          <label htmlFor='email'>
              email: &nbsp;
            <input
                type='text'
                name='email'
                required
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
          </label>
        </div>
        <div className='contactInput'>
          <label htmlFor='subject'>
              subject: &nbsp;
            <input
                type='text'
                name='subject'
                required
                value={contact.subject}
                onChange={(e) => setContact({ ...contact, subject: e.target.value })}
            />
          </label>
        </div>
        <div className='contactArea'>
          <label htmlFor='message'>
              message: &nbsp;
            <textarea
                type='text'
                rows='8'
                name='message'
                required
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
            />
          </label>
        </div>
        <div>
            <button className='contactButton' type='submit' name='submit'>
              Send
            </button>
        </div>
    </form>
    </div>
  );
};

export default Contact;