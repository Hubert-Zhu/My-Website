import React from "react"

import "./style.scss"

const IconTitle = React.memo((props) => {
  return (
    <div className={"IconTitle"}>
      <h1 className={"IconTitle__title"}>{props.title}</h1>
      <div className={"IconTitle__icon-container"}>
        <div className="IconTitle__line"></div>
        <div>
          <img className="IconTitle__icon" src={props.Icon} alt="icons" />
        </div>
        <div className="IconTitle__line"></div>
      </div>
    </div>
  )
})

export default IconTitle
