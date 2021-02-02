import React from 'react' 
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Element2 = (props) => {

  const CreationDiv = styled.div`
    border-style: solid;
    border-color: black;
    width: 100px;
    height: 100px;
  `

  const right = useSpring({
   opacity: 1,
   from: { opacity: 0 },
  })

  return(
    <CreationDiv>
      <animated.div style={right}>Thor Fishing for Jormungand</animated.div>
    </CreationDiv>
  )  
}

export default Element2