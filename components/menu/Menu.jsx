import classes from "./menu.module.scss"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Menu(props) {
  return (
    <div className={`${classes.menu} ${props.active ? classes.active : null}`}>
      <ul>
        <li onClick={props.deactivateTopbar}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={props.deactivateTopbar}>
          <a href="#portfolio">Skills</a>
        </li>
        <li onClick={props.deactivateTopbar}>
          <a href="#works">Projects</a>
        </li>
        <li onClick={props.deactivateTopbar}>
        <a href='/assets/Kanibolotskyi_CV.pdf' target="_blank" download>CV {<FontAwesomeIcon icon={faCloudArrowDown} />}</a>
        {/* <Link href="/assets/Kanibolotskyi_CV.pdf" target="_blank" download>{<FontAwesomeIcon icon={faCloudArrowDown} />}CV</Link> */}
        </li>
        <li onClick={props.deactivateTopbar}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
