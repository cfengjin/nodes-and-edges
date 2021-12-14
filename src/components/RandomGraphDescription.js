import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "katex/dist/katex.min.css"

const RandomGraphDesciption = (nodes, edges) => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      {
        markdownRemark(frontmatter: {title: {eq: "Random Graph Description"}}) {
          html
          frontmatter {
            title
          }
        }
      }
    `
  )
  return (
    <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
  )
}

export default RandomGraphDesciption