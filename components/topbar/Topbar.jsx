import classes from "./topbar.module.scss"
import { Person, Mail } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Topbar(props) {
  return (
    <div className={`${classes.topbar} ${props.active ? classes.active : null}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={`${classes.myLogo} ${props.active ? classes.active : null}`}>
          <a className={`${classes.curly} ${props.active ? classes.active : null}`}>{'{ '}</a>
          <a className={`${classes.name} ${props.active ? classes.active : null}`}>rostyslav_kanibolotskyi</a>
          <a className={classes.curly}>{' }'}</a>
          </div>
          <div className={classes.itemContainer}>
          <a href='/assets/Kanibolotskyi_CV.pdf' target="_blank" download>Curriculum vitae {<FontAwesomeIcon icon={faCloudArrowDown} />}</a>
            {/* <Person className={classes.icon}/>
            <span>+49 160 360 71 64</span> */}
          </div>
          {/* <div className={classes.itemContainer}>
            <Mail className={classes.icon}/>
            <span>rkanibolotskyi@gmail.com</span>
          </div> */}
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
