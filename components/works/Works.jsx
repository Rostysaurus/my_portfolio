import classes from "./works.module.scss"
import Image from "next/image"
import {allPortfolio} from "../data/data"
import { ExpandMore } from "@material-ui/icons";


export default function Works() {
  return (
    <div className={classes.works} id="works">
      <div className={classes.slider}>
        <div className={classes.container}>
          <div className={classes.item}>
            <div className={classes.left}>
              <div className={classes.leftContainer}>
                  <h2>Title</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit voluptatem sit alias esse quisquam harum quo iure eius voluptatibus cum aliquid ex et, temporibus ab unde, beatae odit fugit.</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className={classes.right}>
                <img src="assets/sponty_mockup.jpg" alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
