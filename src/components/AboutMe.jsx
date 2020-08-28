import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      {
        strapiWelcomePage {
          AboutMe
        }
      }
    `
  )

  return (
    <div id="about" className="about_us">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <h2>About me</h2>
            <p className="lead">{data.strapiWelcomePage.AboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
