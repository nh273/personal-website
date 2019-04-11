import React from "react"
import pageStyles from "./page.module.css"

export default ({ children }) => (
  <div className={pageStyles.page}>{children}</div>
)
