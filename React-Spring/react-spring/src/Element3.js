import React from 'react' 
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Element3 = props => {
  const CreationDiv = styled.div`
    border-style: solid;
    border-color: black;
    width: 100px;
    height: 100px;
  `

  const mergeDown = useSpring({
    marginLeft: 100,
    from: { marginLeft: 1400},
  })

  return(
    <animated.div style={mergeDown}><CreationDiv>Thor's Duel with Hrungnir</CreationDiv></animated.div>
  )
}

export default Element3