import classes from "./portfolioItem.module.scss";

export default function PortfolioItem(props) {
  const {item} = props
  return (
    <div className={classes.portfolioItem}>
          <img src={item.image} alt={item.title}/>
          <h3>{item.title}</h3>
        </div>
  )
}
