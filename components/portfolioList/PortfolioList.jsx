import React from 'react'
import classes from "./portfolioList.module.scss"

export default function PortfolioList({title, id, active, setSelected}) {
  return (
    <li className={`${classes.portfolioList} ${active? classes.active : null}`} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
