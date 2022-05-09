import classes from "./portfolio.module.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import PortfolioItem from "../portfolioItem/PortfolioItem";
import { useState, useEffect } from "react";
import { fullstackSkills, frontendSkills, backendSkills } from "../data/skills"
export default function Portfolio() {


  const [selected, setSelected] = useState("fullstack")
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    switch (selected) {
      case "fullstack":
        setFilteredItems(fullstackSkills)
        break;
      case "frontend":
        setFilteredItems(frontendSkills)
        break;
      case "backend":
        setFilteredItems(backendSkills)
        break;
      default:
        break;
    }
  }, [selected])

  const list = [
    {
      id: "fullstack",
      title: "Full-Stack"
    },
    {
      id: "frontend",
      title: "Frontend"
    },
    {
      id: "backend",
      title: "Backend"
    }
  ]

  return (
    <div className={classes.portfolio} id="portfolio">
      <h1>Skills</h1>
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
