import classes from "./topbar.module.scss"
import { Person, Mail } from "@material-ui/icons";

export default function Topbar(props) {
  return (
    <div className={`${classes.topbar} ${props.active ? classes.active : null}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <a className={classes.logo}>Portfolio.</a>
          <div className={classes.itemContainer}>
            <Person className={classes.icon}/>
            <span>+49 160 360 71 64</span>
          </div>
          <div className={classes.itemContainer}>
            <Mail className={classes.icon}/>
            <span>rkanibolotskyi@gmail.com</span>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.hamburger} onClick={props.toolbarToggle}>
            <span className={classes.line1}></span>
            <span className={classes.line2}></span>
            <span className={classes.line3}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
