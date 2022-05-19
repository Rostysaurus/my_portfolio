import classes from "./works.module.scss"
import Image from "next/image"
import {allPortfolio, fullstackSkills} from "../data/data"
import { ExpandMore, ChevronRight, ChevronLeft } from "@material-ui/icons";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'


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
    <div className={classes.works} id="works">
      <h1>Projects</h1>
      <div className={classes.slider} style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
         {allPortfolio.map((project) => (
            <div className={classes.container} key={project.id}>
            <div className={classes.item}>
              <div className={classes.left}>
                <div className={classes.leftContainer}>
                    <h2>{project.type === "Fullstack" ? <FontAwesomeIcon icon={faLayerGroup} /> : <FontAwesomeIcon icon={faWandMagicSparkles} />} {project.title} </h2>
                    <p>{project.description}</p>
                    <span className={classes.skillsContainer}>
                      {project.tags.map((tag) => (
                        fullstackSkills.map((skill) => (
                          tag === skill.title ? <Image key={skill.id} className={classes.skillImage} src={skill.image} alt="" width={25} height={25}/> : null
                        ))
                      ))}
                    </span>
                  </div>
                </div>
                <div className={classes.right}>
                  <Image src={project.image} alt="" width={700} height={500}/>
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
  )
}
