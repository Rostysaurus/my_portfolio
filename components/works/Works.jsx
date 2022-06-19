import classes from "./works.module.scss"
import Image from "next/image"
import {allPortfolio, fullstackSkills} from "../data/data"
import { ExpandMore, ChevronRight, ChevronLeft } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import MultiActionAreaCard from "../card/card";

// console.log(allPortfolio.map(project => (project.tags)))
export default function Works() {

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

  return (
    <Fragment>
    <div className={classes.works} id="works">
      <h1>Projects</h1>
      <div className={classes.slider} style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {allPortfolio.map((project) => (
            <div className={classes.container} key={project.id}>
            <div className={classes.item}>
                <div className={classes.topContainer}>
                <div className={classes.icon}>
                  {project.type === "Fullstack" ? <FontAwesomeIcon icon={faLayerGroup} /> : <FontAwesomeIcon icon={faWandMagicSparkles} />}
                </div>
                <h2> {project.title} </h2>
                <span className={classes.skillsContainer}>
                      {project.tags.map((tag) => (
                        fullstackSkills.map((skill) => (
                          tag === skill.title ? <Image key={skill.id} className={classes.skillImage} src={skill.image} alt="" width={25} height={25}/> : null
                        ))
                      ))}
                    </span>

                </div>
                  <div className={classes.description}>
                  <p>{project.description}</p>
                </div>
                <div className={classes.picture} style={{position: 'relative', width: "50%", height: "50%"}}>
                    <Image src={project.image} alt={project.image} width="100%" height="100%" layout="responsive" objectFit="contain"/>
                </div>

            </div>
        </div>
        ))}
      </div>
      <ChevronRight
      className={`${classes.arrow} ${classes.right}`}
      onClick={rightSlideHandler} />
    <ChevronLeft
      className={`${classes.arrow} ${classes.left}`}
      onClick={leftSlideHandler}/>
    </div>
    </Fragment>
  )
}
