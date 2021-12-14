import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
const sourceLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}
const sourceLink = {
  text: "Source Code",
  url: "https://github.com/cfengjin/nodes-and-edges",
  color: "#8954A8",
}
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Random Graph Model",
    path: "/random-graph",
    description:
      "In this model, the number of nodes and the probability of an edge between any pair of nodes are fixed while other properties are kept random.",
    color: "#E95800",
  },
  {
    text: "Barabási–Albert Model",
    path: "/barabasi-albert",
    description:
      "The Barabási–Albert model is a preferential attachment model, which describes the formation of networks.",
    color: "#1099A8",
  },
//   {
//     color: "#BC027F",
//   },
//   {
//     color: "#0D96F2",
//   },
//   {
//     color: "#8EB814",
//   },
//   {
//     color: "#663399",
//   },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Nodes And Edges
        <br />
        <span style={headingAccentStyles}>— a collection of network models.</span>
      </h1>
      <p style={paragraphStyles}>
        Models are playgrounds for us experiment with different network parameters and see how they affect the structure of the network.
        Pick a model below and play with it!
      </p>
      <ul style={listStyles}>
        <li style={sourceLinkStyle}>
          <a
            style={linkStyle}
            href={`${sourceLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {sourceLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.path} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <Link
                style={linkStyle}
                to={link.path}
              >
                {link.text}
              </Link>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
