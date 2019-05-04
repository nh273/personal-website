import React from "react"
import pageStyles from "./pagelayout.module.css"

export default ({ children }) => (
  <div className={pageStyles.page}>{children}</div>
)
