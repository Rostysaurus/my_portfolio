import classes from './contact.module.scss'
import { useState } from "react";
import Image from 'next/image';
import { useRef } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const nameInput = useRef()
  const emailInput = useRef()
  const textInput = useRef()
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value
    const enteredEmail = emailInput.current.value
    const enteredText = textInput.current.value

    const formData = {
      name: enteredName,
      email: enteredEmail,
      text: enteredText
    }
    fetch("/api/mail", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setMessage(true);
        formRef.current.reset()
      }
    })
    console.log(formData)
  };
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.left}>
        <Image src="/assets/message.svg" alt="" width={500} height={500}/>
      </div>
      <div className={classes.right}>
        <h2>Contact.</h2>
        <form ref={formRef} method="post" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" ref={nameInput}/>
          <input type="text" placeholder="Email" ref={emailInput}/>
          <textarea placeholder="Message" ref={textInput}></textarea>
          <button type="submit">Send</button>
          {message && <span>Thansk for your message. I will reply shortly!</span>}
        </form>
      </div>
    </div>
  );
}
