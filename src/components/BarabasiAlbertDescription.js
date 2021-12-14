import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "katex/dist/katex.min.css"

const BarabasiAlbertDescription = (nodes, edges) => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      {
        markdownRemark(frontmatter: {title: {eq: "Barabasi-Albert Description"}}) {
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

export default BarabasiAlbertDescription