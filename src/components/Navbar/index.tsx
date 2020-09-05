import React from "react"
import { PageProps, graphql, Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Avatar from "../../images/shared/avatar.jpg"

import "./../commonStyle/style.scss"

interface Links {
  title: string
  link: string
}

const links: Array<Links> = [
  {
    title: "About Me",
    link: "/about-me",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Work Experience",
    link: "/work-experience",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
]

const Nav: React.FC = () => {
  const props = useSpring({
    transform: "translate3d(0px, 0px, 0px)",
    opacity: 1,
    from: { transform: "translate3d(0px, -60px, 0px)" },
    config: {
      tension: 100,
    },
    delay: 300,
  })

  return (
    <animated.nav style={props} className="nav">
      <div className="nav__avatar">
        <img src={Avatar} alt="Touxiang" />
        <div className="nav__name">
          <Link to="/">Hubert Zhu</Link>
        </div>
      </div>

      <div className="nav__options">
        {links.map((item, index) => (
          <div className="nav__option" key={index}>
            <Link to={item.link}>{item.title}</Link>
          </div>
        ))}

        <div className="nav__option">
          <a href="https://github.com/Hubert-Zhu">GitHub</a>
        </div>
      </div>
    </animated.nav>
  )
}

export default Nav
