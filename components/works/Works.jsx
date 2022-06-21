import classes from "./works.module.scss"
import Image from "next/image"
import {allPortfolio, fullstackSkills} from "../data/data"
import { ExpandMore, ChevronRight, ChevronLeft  } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import { Fragment, useState, useReducer } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import MultiActionAreaCard from "../card/card";

const initialState = {slideIndex: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return state.slideIndex < allPortfolio.length - 1 ? {slideIndex: state.slideIndex + 1} : {slideIndex: 0}
    case "prev":
      return state.slideIndex === 0 ? {slideIndex: allPortfolio.length - 1} : {slideIndex: state.slideIndex - 1}
    default:
      throw new Error();
  }
}

// console.log(allPortfolio.map(project => (project.tags)))
export default function Works() {
  const [slideState, dispatch] = useReducer(reducer, initialState)
  const [currentSlide, setCurrentSlide] = useState(0)

  const rightSlideHandler = () => {
    if (currentSlide < allPortfolio.length - 1) {
      setCurrentSlide(prev => prev + 1)
    } else {
      setCurrentSlide(0)
    }
    }

  const leftSlideHandler = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    } else {
      setCurrentSlide(allPortfolio.length - 1)
    }
  }

  // allPortfolio.map((project, index) => (
  //   console.log(index)
  // ))

  console.log(slideState.slideIndex)

  return (
    <Fragment>
      <div className={classes.myWorks}>
        <h1>Projects</h1>
        {allPortfolio.map((project, index) => (
            index === slideState.slideIndex && (
              <div className={classes.card} key={index}>
                <div className={classes.left} style={{position: 'relative', width: "100%", height: "100%"}}>
                  <Image src={project.image} alt={project.image} width="25%" height="25%" layout="responsive" objectFit="contain"/>
                </div>
                <div className={classes.right}>
                  <div className={classes.text}>
                    <h2> {project.title} </h2>
                    <p>{project.description}</p>
                  </div>
                  <div className={classes.skills}>
                    {project.tags.map((tag) => (
                      fullstackSkills.map((skill) => (
                        tag === skill.title ? <Image key={skill.id} className={classes.skillImage} src={skill.image} alt="" width={40} height={40}/> : null
                        ))
                      ))}
                  </div>
                </div>
                <div className={`${classes.chevron} ${classes.next}`} onClick={() => dispatch({type: 'next'})}>
                  <ChevronRight/>
                </div>
                <div className={`${classes.chevron} ${classes.prev}`} onClick={() => dispatch({type: 'prev'})}>
                  <ChevronLeft/>
                </div>
          </div>
            )
          ))}
      </div>
    </Fragment>
  )
}
