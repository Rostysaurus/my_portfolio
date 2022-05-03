import classes from "./menu.module.scss"

export default function Menu(props) {
  return (
    <div className={`${classes.menu} ${props.active ? classes.active : null}`}>
      <ul>
        <li onClick={props.deactivateTopbar}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={props.deactivateTopbar}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={props.deactivateTopbar}>
          <a href="#works">Works</a>
        </li>
        <li onClick={props.deactivateTopbar}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={props.deactivateTopbar}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
