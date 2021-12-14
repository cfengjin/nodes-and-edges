import React, {useState} from "react"
import RandomGraphDesciption from "../components/RandomGraphDescription"
import Graph from "../components/Graph"

// styles
const mainStyles = {
  display: "flex",
  width: "100vw",
  height: "100vh",
}
const asideStyles = {
  minWidth: "18rem"
}

// code and markup
const RandomGraphPage = () => {
  // define states
  const [numNodes, setNumNodes] = useState(0)
  const [edgeProb, setEdgeProb] = useState(0)

  // generate nodes
  let nodes = []
  for (let i = 0; i < numNodes; ++i) {
    nodes.push({ id: i })
  }

  // generate edges
  let edges = []
  for (let j = 0; j < numNodes; ++j) {
    for (let i = j; i < numNodes; ++i ) {
      if (i !== j && Math.random() < edgeProb) {
        edges.push({ source: j, target: i })
      }
    }
  }

  return (
    <main style={mainStyles}>
      <title>Random Graph Model</title>
      <aside style={asideStyles}>
        <h1>
          Random Graph Model
        </h1>
        <p>Number of nodes: {numNodes}</p>
        <input
          type="range"
          min={0}
          max={99}
          step={1}
          value={numNodes}
          onInput={e => setNumNodes(e.target.value)}
        />
        <p>Edge probability: {edgeProb}</p>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={edgeProb}
          onInput={e => setEdgeProb(e.target.value)}
        />
        <RandomGraphDesciption />
      </aside>
      <Graph nodes={nodes} edges={edges}/>
    </main>
  )
}

export default RandomGraphPage