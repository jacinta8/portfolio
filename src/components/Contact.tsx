import React, { useRef, useEffect, useReducer, useState } from "react"
import "./Contact.css"
import ContactImg from "../assets/connect.png"
import { useMediaQuery } from "../hook/useMediaQuery"
import emailjs from "@emailjs/browser"
import { FaRegHandshake, FaAngleDoubleRight } from "react-icons/fa"

type State = {
  value: string | null
  isValid?: boolean
  isTouched?: boolean | undefined
}

type Action =
  | { type: "USER_NAME"; val: string }
  | { type: "USER_EMAIL"; val: string }
  | { type: "USER_MSG"; val: string }
  | { type: "INPUT_BLUR" }
  | { type: "RESET_MSG" }
  | { type: "RESET_NAME" }
  | { type: "RESET_EMAIL" }

const nameReducer = (state: State, action: Action): State => {
  if (action.type === "USER_NAME") {
    return { value: action.val, isValid: action.val?.trim() !== "" }
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value?.trim() !== "",
      isTouched: true,
    }
  }
  if (action.type === "RESET_NAME") {
    return {
      value: "",
      isTouched: false,
    }
  }
  return state
}
const emailReducer = (state: State, action: Action): State => {
  if (action.type === "USER_EMAIL") {
    const atIndex = action.val?.indexOf("@")
    const lastAtIndex = action.val?.lastIndexOf("@")
    if (atIndex !== undefined)
      return {
        value: action.val,
        isValid:
          action.val?.includes("@") &&
          atIndex > 0 &&
          lastAtIndex === atIndex &&
          atIndex < action.val.length - 1,
      }
  }
  if (action.type === "INPUT_BLUR") {
    const atIndex = state.value?.indexOf("@")
    const lastAtIndex = state.value?.lastIndexOf("@")
    if (atIndex !== undefined)
      return {
        value: state.value,
        isValid:
          state.value?.includes("@") &&
          atIndex > 0 &&
          lastAtIndex === atIndex &&
          atIndex < state.value.length - 1,
        isTouched: true,
      }
  }
  if (action.type === "RESET_EMAIL") {
    return {
      value: "",
      isTouched: false,
    }
  }
  return state
}
const msgReducer = (state: State, action: Action): State => {
  if (action.type === "USER_MSG") {
    return { value: action.val, isValid: action.val.trim() !== "" }
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value?.trim() !== "",
      isTouched: true,
    }
  }
  if (action.type === "RESET_MSG") {
    return {
      value: "",
      isTouched: false,
    }
  }
  return state
}

const Contact = () => {
  const isVisible = useMediaQuery("#contact")
  const [isFormValid, setFormIsValid] = useState<boolean>(false)
  const [successMsg, setSuccessMsg] = useState<boolean>(false)
  const elementRef = useRef<HTMLInputElement>(null)
  const form = useRef<HTMLFormElement>(null)

  const handleClick = () => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    })
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (successMsg) setSuccessMsg(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [successMsg])

  const [stateName, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  })
  const [stateEmail, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  })
  const [stateMsg, dispatchMsg] = useReducer(msgReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  })
  const {
    value: nameValue,
    isValid: isNameValid,
    isTouched: isNameTouched,
  } = stateName

  const {
    value: emailValue,
    isValid: isEmailValid,
    isTouched: isEmailTouched,
  } = stateEmail

  const {
    value: msgValue,
    isValid: isMsgValid,
    isTouched: isMsgTouched,
  } = stateMsg
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isNameValid && isEmailValid && isMsgValid !== undefined)
        setFormIsValid(isNameValid && isEmailValid && isMsgValid)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [nameValue, emailValue, msgValue])

  const inputNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchName({ type: "USER_NAME", val: event.target.value })
  }
  const nameInputBlurHandler = () => {
    dispatchName({ type: "INPUT_BLUR" })
  }
  const inputEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: "USER_EMAIL", val: event.target.value })
  }
  const emailInputBlurHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  }
  const inputMsgHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatchMsg({ type: "USER_MSG", val: event.target.value })
  }
  const msgInputBlurHandler = () => {
    dispatchMsg({ type: "INPUT_BLUR" })
  }
  const resetInput = () => {
    dispatchEmail({ type: "RESET_EMAIL" })
    dispatchName({ type: "RESET_NAME" })
    dispatchMsg({ type: "RESET_MSG" })
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccessMsg(true)

    if (!isNameValid || !isEmailValid || !isMsgValid) {
      setFormIsValid(false)
      return
    }
    if (form.current)
      emailjs
        .sendForm(
          "service_daw0w3e",
          "template_kio97ep",
          form.current,
          "kYcRKVukcCEmEqRay"
        )
        .then(
          (result) => {
            console.log(result.text)
            console.log("message sent")
            setFormIsValid(false)
            resetInput()
          },
          (error) => {
            console.log(error.text)
          }
        )
  }

  return (
    <section id="contact" ref={elementRef} onClick={handleClick}>
      <div className={`contact-section ${isVisible ? "animate" : ""}`}>
        <p className="title">
          CON<span>TACT</span>
        </p>
        <div className="form-section">
          <img src={ContactImg} alt="connection" className="connection-img" />

          <form ref={form} onSubmit={sendEmail}>
            {successMsg && <p className="alert">Successfully sent !</p>}

            <div className="form-group">
              {/* <div
                className={`check-box ${
                  !isNameValid && isNameTouched ? "invalid" : ""
                }`}
              >
                Please specify your name
                   
              </div> */}
              {!isNameValid && isNameTouched && (
                <div className="check-box invalid">
                  Please specify your name
                </div>
              )}
              {!isNameTouched && <div className="check-box"></div>}
              {isNameValid && isNameTouched && (
                <div className="check-box">✓</div>
              )}

              <label
                htmlFor="name"
                className={`animated-label ${
                  nameValue?.trim() !== "" ? "move-up" : ""
                }`}
              >
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                value={nameValue || ""}
                onChange={inputNameHandler}
                onBlur={nameInputBlurHandler}
              />
              <span className="sliding-border" />
            </div>

            <div className="form-group">
              {/* <div
                className={`check-box ${
                  !isEmailValid && isEmailTouched ? "invalid" : ""
                }`}
              >
                Please enter a valid email.
              </div> */}
              {!isEmailValid && isEmailTouched && (
                <div className="check-box invalid">
                  Please enter a valid email
                </div>
              )}
              {!isEmailTouched && <div className="check-box"></div>}
              {isEmailValid && isEmailTouched && (
                <div className="check-box">✓</div>
              )}
              <label
                htmlFor="email"
                className={`animated-label ${
                  emailValue?.trim() !== "" ? "move-up" : ""
                }`}
              >
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={emailValue || ""}
                onChange={inputEmailHandler}
                onBlur={emailInputBlurHandler}
              />
              <span className="sliding-border" />
            </div>

            <div className="form-group">
              {/* <div
                className={`check-box ${
                  !isMsgValid && isMsgTouched ? "invalid" : ""
                }`}
              >
                Please leave your message.
              </div> */}
              {!isMsgValid && isMsgTouched && (
                <div className="check-box invalid">
                  Please leave your message
                </div>
              )}
              {!isMsgTouched && <div className="check-box"></div>}
              {isMsgValid && isMsgTouched && <div className="check-box">✓</div>}
              <label
                htmlFor="message"
                className={`animated-label ${
                  msgValue?.trim() !== "" ? "move-up" : ""
                }`}
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
                value={msgValue || ""}
                onChange={inputMsgHandler}
                onBlur={msgInputBlurHandler}
              />
              <span className="sliding-border" />
            </div>
            <div className="btn-box">
              <button
                className="btn btnSubmit"
                type="submit"
                disabled={!isFormValid}
              >
                <span className="hand-shake">
                  <FaRegHandshake />
                </span>
                <span>Submit</span>
                <span className="icon-arrow-right">
                  <FaAngleDoubleRight />
                </span>
                <i></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
