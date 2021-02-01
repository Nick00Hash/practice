import './App.css';
import styled from 'styled-components'
import Element2 from './Element2'
import Element3 from './Element3'
import {useSpring, animated} from 'react-spring'

function App() {
  const handleScroll = (e) => {
    console.log(e)
  }

  const CreationDiv = styled.div`
    border-style: solid;
    border-color: black;
    width: 100px;
    height: 100px;
  `

  const fish = useSpring({
    marginLeft: 100, 
    from: {marginLeft: -500}
  })

  return (
   <div onClick={handleScroll}>
      
      <animated.div style={fish}> <CreationDiv>The Creation of Thor's Hammer</CreationDiv> </animated.div>
      
      <Element2 />
      <Element3 />
   </div>
  );
}

export default App;
