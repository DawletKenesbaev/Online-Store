import styled from "styled-components"
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="home">
    <Container className="h-100">
        <div className="home-main">
          <h1 className="home-main-title">Unlimited Training</h1> 
          <p className='home-main--text'>Extend the limits of your workouts by exercising
              your strength, resistance and flexibility where you want
              and at the intensity you want</p>  
        <NavLink to="/store">
        <button className='home-main--btn'>
          shop from us
        </button>
      </NavLink>
        </div>
    </Container>
 </div>
  )
}
const Container = styled.div`
  margin: 0 auto;
  
`
  


export default Home
