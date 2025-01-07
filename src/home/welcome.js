import styled from "styled-components"
import backgroundimage from "../assets/background.jpg"
import character from "../assets/character.png"
import {InstagramWithCircle} from '@styled-icons/entypo-social/InstagramWithCircle'
import { Link } from "react-router-dom"


const Container = styled.div`
  background-color: #e3ff62;
  background-size: cover !important; 
  background-repeat: no-repeat;
  background-position: center;
  background:url(${backgroundimage}); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  overflow: hidden;
  padding: 0;
  height: 100vh;
`;

const Header = styled.div`
  font-weight: bold;
  color: #1e3619;
  position: relative;
  z-index: 2;
  font-size: 14vw;
  width: 100%;
`;



const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  i {
    font-size: 1.5rem;
    color: #1e3619;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 16px 0;
  background-color: #1e3619;
  color: #e3ff62;
  /* border-radius: 0 0 30px 30px; */
  // position: absolute;
  bottom: 0;
  z-index: 10;

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding: 20px;
  color: #1e3619;
  font-size: 1rem;
  font-weight: bold;
  height: 50%;
`;

const SubText = styled.div`
  color: #1e3619;
  font-size: 1rem;
  max-width: 300px;
  line-height: 1.5;
`;

const Character = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: auto;
    height: 90vh;
    transform: translateX(-50%);
    z-index: 5;
`


const InstagramLogo = styled(InstagramWithCircle)`
  color: black;
  width: 60px;
  position: absolute;
  left: 40px;
  bottom: 80px;
    
  &:hover{
    cursor: pointer;
  }
`


const Welcome = () => {
    return (
        <Container>
    
        <Header>ארט אקשן</Header>

        <InstagramLogo onClick={() => {window.open("https://www.instagram.com/art_action_il/", "_blank");}} />

        <Description>
          <SubText style={{marginTop:'100px'}}>
            What makes my photography unique is the combination of technical
            expertise and a personal touch.
          </SubText>

 
          <SubText style={{marginBottom:'150px'}}>
        
            Immerse yourself in a world where each frame tells a tale, capturing
            the beauty of the ordinary and the extraordinary.
          </SubText>
        </Description>
        <SocialIcons>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </SocialIcons>

        <Character src={character} alt="hero-image" />

        <Footer>
          <a href="#works">עבודות</a>
          <a href="#gallery">צור קשר</a>
          <a href="#about">אודות</a>
        </Footer>
        </Container>
    )
}

export default Welcome;