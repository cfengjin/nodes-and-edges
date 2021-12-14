import React, { useRef, useState, useEffect } from 'react'
import { select, forceManyBody, forceLink, forceSimulation, forceX, forceY, zoom } from 'd3'
import useWindowSize from "../hooks/useWindowSize"

const sectionStyles = {
  flexGrow: 1
}

const svgStyles = {
  height: "100vh"
}

const NODE_RADIUS = 4

const Graph = props => {
  const svgRef = useRef()
  const nodesRef = useRef()
  const edgesRef = useRef()

  const [width, height] = useWindowSize()
  const viewBox = [-(width - (18 * 16)) / 2, -height / 2, width - (18 * 16), height]

  useEffect(() => {
    const svg = select(svgRef.current)
    const nodes = select(nodesRef.current)
    const edges = select(edgesRef.current)

    svg
      .attr("viewBox", viewBox)

    const simulation = forceSimulation(props.nodes)
      .force("link", forceLink(props.edges))
      .force("charge", forceManyBody())
      .force("x", forceX())
      .force("y", forceY())
      .on("tick", () => {
        nodes
          .selectAll("circle")
          .data(props.nodes)
          .join("circle")
            .attr("r", NODE_RADIUS)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)

        edges
          .selectAll("line")
          .data(props.edges)
          .join("line")
            .attr("stroke", "black")
            .attr("x1", link => link.source.x)
            .attr("y1", link => link.source.y)
            .attr("x2", link => link.target.x)
            .attr("y2", link => link.target.y);
      });
  })

  return (
    <section style={sectionStyles}>
      <svg style={svgStyles} ref={svgRef}>
        <g ref={nodesRef} />
        <g ref={edgesRef} />
      </svg>
    </section>
  )
}

export default Graph