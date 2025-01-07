import React from "react";
import styled from "styled-components";


const Container = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  padding: 0 5%;
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background-color: white;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Name = styled.p`
  margin: 0 0;
  color: black;
  font-size: 22px;
`;

const Links = styled.div`
  margin: 0 0;
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledLink = styled.p`
  text-decoration: none;
  color: black;
  font-size: 22px;
  margin: 0% 0 0 5%;
  transition: all 0.5s;
  &:hover {
    text-shadow: 2px 2px 10px rgb(0,0,0, 0.3);
    cursor: pointer;
  }
`;

const Header = (props) => {
  const ScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <Container>
        <Links>
          <StyledLink>
            מי אנחנו
          </StyledLink>
          <StyledLink>
            פרויקטים
          </StyledLink>
          <StyledLink>
            צרו קשר
          </StyledLink>
        </Links>
        <Name>ארט אקשן</Name>
      </Container>
  );
};

export default Header;
