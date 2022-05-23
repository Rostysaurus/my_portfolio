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

const changeNameReducer = (state, action) => {
  if (action.type === "CHANGE")
  return {
    value: action.value,
    isValid: action.value
  }
  if (action.type === "BLUR")
  return {
    value: state.value,
    isValid: state.value.length >= 1
  }
  return {
    value: "",
    isValid: false
  }
}

const changeTextReducer = (state, action) => {
  if (action.type === "CHANGE")
  return {
    value: action.value,
    isValid: action.value
  }
  if (action.type === "BLUR")
  return {
    value: state.value,
    isValid: state.value.length >= 1
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

  //Input states
  const [nameState, dispatchName] = useReducer(changeNameReducer, {value: "", isValid: false})
  const [emailState, dispatchEmail] = useReducer(changeEmailReducer, {value: "", isValid: false})
  const [textState, dispatchText] = useReducer(changeTextReducer,{value: "", isValid: false})

  const validateNameHandler = () => {
    console.log("nameBlur")
    dispatchName({
      type: "BLUR",
    })
  }

  const changeNameHandler = (event) => {
    dispatchName({
      type: "CHANGE",
      value: event.target.value
    })

    setFormIsValid(emailState.value.includes("@") && nameState.value && textState.value)
  }

  const changeEmailHandler = (event) => {
    dispatchEmail({
      type: "CHANGE",
      value: event.target.value
    })

    setFormIsValid(emailState.value.includes("@") && nameState.value && textState.value)
  }

  const changeTextHandler = (event) => {
    dispatchText({
      type: "CHANGE",
      value: event.target.value
    })

    setFormIsValid(emailState.value.includes("@") && nameState.value && textState.value)
  }

  const validateEmailHandler = (event) => {
    dispatchEmail({
      type: "BLUR",
    })
  }

  const validateTextHandler = () => {
    dispatchName({
      type: "BLUR",
    })
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
    const enteredName = nameState.value
    const enteredEmail = emailState.value
    const enteredText = textState.value

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
      alert("email!")
    } else if (!enteredText) {
      alert("text")
    } else null

  };
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.left}>
        <Image src="/assets/message.svg" alt="" width={500} height={500}/>
      </div>
      <div className={classes.right}>
      <h1>Contact</h1>
        <form ref={formRef} method="post" onSubmit={handleSubmit}>
          <input
            className={`${nameState.isValid === false ? classes.error : classes.valid}`}
            type="text"
            placeholder="Name"
            value={nameState.value}
            // ref={nameInput}
            onChange={changeNameHandler}
            onBlur={validateNameHandler}/>
          <input
            className={`${emailState.isValid === false ? classes.error : classes.valid}`}
            type="text"
            placeholder="Email"
            // ref={emailInput}
            value={emailState.value}
            onChange={changeEmailHandler}
            onBlur={validateEmailHandler}/>
          <textarea
            className={`${textState.isValid === false ? classes.error : classes.valid}`}
            placeholder="Message"
            // ref={textInput}
            value={textState.value}
            onChange={changeTextHandler}
            onBlur={validateTextHandler}>
          </textarea>
          <button type="submit">Send</button>
          {message && <span>Thansk for your message. I will reply shortly!</span>}
        </form>
      </div>
    </div>
  );
}
