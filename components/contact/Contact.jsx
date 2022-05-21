import classes from './contact.module.scss'
import { useState } from "react";
import Image from 'next/image';
import { useRef, useEffect, useReducer } from "react";
import {Box, Button} from "@mui/material";
import TextField from "@mui/material/TextField";

const changeEmailReducer = (state, action) => {
  if (action.type === "CHANGE")
  return {
    value: action.value,
    isValid: action.value.includes("@")
  }
  if (action.type === "BLUR")
  return {
    value: state.value,
    isValid: state.value.includes("@")
  }
  return {
    value: "",
    isValid: false
  }
}

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [nameIsValid, setNameIsValid] = useState()
  const [emailIsValid, setEmailIsValid] = useState(null)
  const [textIsValid, setTextIsValid] = useState(null)
  const [formIsValid, setFormIsValid] = useState(null)
  const nameInput = useRef()
  const emailInput = useRef()
  const textInput = useRef()
  const formRef = useRef()

  const [emailState, dispatchEmail] = useReducer(changeEmailReducer, {value: "", isValid: null})

  const validateNameHandler = () => {
    setNameIsValid(nameInput.current.value)
  }

  const changeEmailHandler = (event) => {
    dispatchEmail({
      type: "CHANGE",
      value: event.target.value
    })

    setFormIsValid(emailState.value.includes("@") && nameInput.current.value && textInput.current.value)
  }

  const validateEmailHandler = (event) => {
    dispatchEmail({
      type: "BLUR",
    })
  }

  const validateTextHandler = () => {
    setTextIsValid(textInput.current.value)
  }

  // useEffect(() => {
  //   console.log("useEffect")
  //   // const identifier = setTimeout(() => {
  //   //   console.log("timout");
  //   //   setFormIsValid(nameInput.current.value && emailInput.current.value.includes('@') && textInput.current.value)
  //   // }, 500)
  // }, [nameInput, emailInput, textInput])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value
    const enteredEmail = emailState.value
    const enteredText = textInput.current.value

    const formData = {
      name: enteredName,
      email: enteredEmail,
      text: enteredText
    }
    if (enteredName && enteredEmail && enteredText) {
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
        }
      })
      setMessage(true);
      setNameIsValid(true)
      formRef.current.reset()
      console.log(formData)
    } else if (!enteredName) {
      nameIsValid(false)
    } else if (!enteredEmail) {
      alert("email bitch!")
    } else if (!enteredText) {
      alert("text bitch!")
    } else null

  };
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.left}>
        <Image src="/assets/message.svg" alt="" width={250} height={250}/>
      </div>
      <div className={classes.right}>
        <form ref={formRef} method="post" onSubmit={handleSubmit}>
          <input
            className={`${nameIsValid === false ? classes.error : classes.valid}`}
            type="text"
            placeholder="Name"
            ref={nameInput}
            onChange={validateNameHandler}/>
          <input
            className={`${emailState.isValid === false ? classes.error : classes.valid}`}
            type="text"
            placeholder="Email"
            // ref={emailInput}
            value={emailState.value}
            onChange={changeEmailHandler}
            onBlur={validateEmailHandler}/>
          <textarea
            className={`${textIsValid === false ? classes.error : classes.valid}`}
            placeholder="Message"
            ref={textInput}
            onChange={validateTextHandler}>
          </textarea>
          <button type="submit">Send</button>
          {message && <span>Thansk for your message. I will reply shortly!</span>}
        </form>
      </div>
    </div>
  );
}
