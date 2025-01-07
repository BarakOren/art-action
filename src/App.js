import styled from "styled-components"
import Home from "./home/home"
import { createGlobalStyle } from 'styled-components'
import Header from "./header/Header"

const GlobalStyle = createGlobalStyle`
  body {
    color: #1e3619;
    background-color: #e3ff62;
  }
`


const AppContainer = styled.div`
    width: auto;
`

function App() {
  return (
    <AppContainer>
    <GlobalStyle />
      <Home />
    </AppContainer>
  );
}

export default App;
