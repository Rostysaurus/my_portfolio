import classes from "./portfolio.module.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import PortfolioItem from "../portfolioItem/PortfolioItem";
import { useState, useEffect } from "react";
import { allPortfolio, fullstackPortfolio, frontendPortfolio } from "../data/data"
export default function Portfolio() {


  const [selected, setSelected] = useState("all")
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    switch (selected) {
      case "all":
        setFilteredItems(allPortfolio)
        break;
      case "fullstack":
        setFilteredItems(fullstackPortfolio)
        break;
      case "frontend":
        setFilteredItems(frontendPortfolio)
        break;
      default:
        break;
    }
  }, [selected])

  const list = [
    {
      id: "all",
      title: "All"
    },
    {
      id: "fullstack",
      title: "Full Stack"
    },
    {
      id: "frontend",
      title: "Front End"
    }
  ]

  return (
    <div className={classes.portfolio} id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            />
        ))}
      </ul>
      <div className={classes.container}>
        {filteredItems.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
