import React, {useState} from "react"
import { Link } from "gatsby"
import { PlotFigure } from "plot-react"
import * as Plot from "@observablehq/plot";
import BarabasiAlbertDescription from "../components/BarabasiAlbertDescription";
import Graph from "../components/Graph"

// styles
const mainStyles = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const asideStyles = {
  minWidth: "36rem",
  padding: 24,
  overflow: "auto"
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// code and markup
const BarabasiAlbertPage = () => {
  // define states
  const [nodes, setNodes] = useState([{ id: 0 }])
  const [targets, setTargets] = useState([0])
  const [edges, setEdges] = useState([])
  const [degrees, setDegrees] = useState([0])
  const [numConnects, setNumConnects] = useState(1)

  const addNode = () => {
    let newEdges = new Array()
    let newTargets = new Array()
    let newDegrees = new Array()
    for (let i = 0; i < edges.length; ++i) {
      newEdges.push(edges[i])
    }
    for (let i = 0; i < targets.length; ++i) {
      newTargets.push(targets[i])
    }
    for (let i = 0; i < degrees.length; ++i) {
      newDegrees.push(degrees[i])
    }
    for (let i = 0; i < numConnects; ++i) {
      const newConnection = nodes.length
      if (Math.random() < 1 / numConnects) {
        newConnection = targets[Math.floor(Math.random()*nodes.length)]
      } else {
        newConnection = nodes[Math.floor(Math.random()*nodes.length)].id
      }
      newEdges.push({ source: nodes.length, target: newConnection })
      newTargets.push(newConnection)
      newDegrees[newConnection]++
    }
    setEdges(newEdges)
    setTargets(newTargets)
    const newNodes = [...nodes, { id: nodes.length }]
    setNodes(newNodes)
    newDegrees.push(numConnects)
    setDegrees(newDegrees)
  }

  const clearGraph = () => {
    setNodes([{ id: 0 }])
    setTargets([0])
    setEdges([])
    setDegrees([0])
  }

  let frequencies = new Array(Math.max(...degrees) + 1).fill(0)
  for (let i = 0; i < nodes.length; i++) {
    frequencies[degrees[i]]++
  }

  let powerLaw = new Array(frequencies.length).fill(0)
  for (let i = numConnects; i < powerLaw.length; i++) {
    powerLaw[i] = 400 * Math.max(...frequencies) * i**-3
  }
  console.log(frequencies)
  console.log(powerLaw)

  return (
    <main style={mainStyles}>
      <title>Barabási–Albert Model</title>
      <aside style={asideStyles}>
        <Link style={linkStyle} to="/">Go Back</Link>
        <h1>
          Barabási–Albert Model
        </h1>
        <h3>
          Parameters
        </h3>
        <p>New connections to make: {numConnects}</p>
        <input
          type="range"
          min={1}
          max={9}
          step={1}
          value={numConnects}
          onInput={e => {
            clearGraph()
            setNumConnects(e.target.value)
          }}
        />
        <button
          onClick={addNode}
        >
          Add Node
        </button>
        <button
          onClick={clearGraph}
        >
          Clear Graph
        </button>
        <h3>Metrics</h3>
        <p>Number of nodes: {nodes.length}</p>
        <p>Number of edges: {edges.length}</p>
        <p>Degree distribution (red: model, blue: data):</p>
        <PlotFigure
          options={
            {
              x: {
                label: "degree"
              },
              y: {
                label: "frequency"
              },
              marks: [
                Plot.lineY(frequencies, { title: "data", stroke: "blue" }),
                Plot.lineY(powerLaw, { title: "model", stroke: "red" }),
              ],
            }
          }
        />
        <BarabasiAlbertDescription />
      </aside>
      <Graph nodes={nodes} edges={edges}/>
    </main>
  )
}

export default BarabasiAlbertPage