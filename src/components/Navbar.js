import React from "react"
import navBarStyle from "./navbar.module.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      lastScrollY: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    let prevScrollY = this.state.lastScrollY
    let currentScrollY = window.pageYOffset
    let newHidden = this.state.hidden

    if (currentScrollY >= prevScrollY && currentScrollY > 50) {
      // Scrolling down & not at top of page
      newHidden = true
    } else {
      // Scrolling up
      newHidden = false
    }
    this.setState({ lastScrollY: currentScrollY, hidden: newHidden })
  }

  render() {
    let className = this.state.hidden
      ? navBarStyle.navbarhidden
      : navBarStyle.navbar
    return <nav className={className}>This is example Nav Bar</nav>
  }
}

export default Navbar
