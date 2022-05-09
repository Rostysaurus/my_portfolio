import classes from "./portfolioItem.module.scss";
import Image from "next/image";

export default function PortfolioItem(props) {
  const {item} = props
  return (
    <div className={classes.portfolioItem}>
          <Image src={item.image} alt={item.title} width={100}
      height={100}/>
          <h3>{item.title}</h3>
        </div>
  )
}
