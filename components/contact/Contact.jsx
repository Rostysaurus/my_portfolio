import classes from './contact.module.scss'
import { useState } from "react";
import Image from 'next/image';


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.left}>
        <Image src="/assets/message.svg" alt="" width={500} height={500}/>
      </div>
      <div className={classes.right}>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thansk for your message. I will reply shortly!</span>}
        </form>
      </div>
    </div>
  );
}
