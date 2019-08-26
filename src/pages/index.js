import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo";
import "../dark-theme.scss"
import styles from "./index.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div id="stars1"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <nav>
      <div className={styles.typewriter}>
        <h1>courtyen</h1>
      </div>
      <Link to="/page-2/" className={styles.myLink}>Enter site</Link>
    </nav>
  </>
)

export default IndexPage
