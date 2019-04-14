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
    this.setState( {lastScrollY : window.pageYOffset})
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    let lastScrollY = this.state.lastScrollY
    let currentScrollY = window.pageYOffset
    let jiggle = 5 // to make the scroll up & down trigger not too sensitive
    var hidden = this.state.hidden;

    if (lastScrollY - currentScrollY > jiggle || currentScrollY < jiggle) {
      // Scrolling up or at top of page
      hidden = false
    } else if (currentScrollY - lastScrollY > jiggle) {
      // Scrolling down
      hidden = true
    }
    this.setState({ lastScrollY: currentScrollY, hidden })
  }

  render() {
    let className = this.state.hidden
      ? navBarStyle.navbarhidden
      : navBarStyle.navbar
    return <nav className={className}>This is example Nav Bar</nav>
  }
}

export default Navbar
