import classes from "./intro.module.scss"
import { ExpandMore } from "@material-ui/icons";
import { useEffect, useRef } from "react";
import { init } from 'ityped'
import Image from "next/image";
import { Button } from "@material-ui/core";
import Link from "next/link";

export default function Intro() {

  const textRef = useRef()

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     strings: ['Web Developer' ]
  //   })
  // }, [])

  return (
    <div className={classes.intro} id="intro">
      <div className={classes.left}>
        <div className={classes.imageContainer}>
          <img className={classes.img} src="/assets/myself_improved.jpg" alt="Rostyslav" />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2>Hi there, I am</h2>
          <h1>Rostyslav Kanibolotskyi</h1>
          <h3>Junior <span ref={textRef}>Web Developer</span></h3>
          <div className={classes.actions}>
            <div className={classes.btn}>
              <Link href="#portfolio">
                <a>Portfolio</a>
              </Link>
            </div>
            <div className={`${classes.btn} ${classes.contact}`}>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
