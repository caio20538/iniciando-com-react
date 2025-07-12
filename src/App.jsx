import React from "react";
import './styles/app2.css'
import {Header} from "./components/Header/header";
import { Article } from "./components/Article/Article";

class App extends React.Component {

  render() {
    return(
      <>
      <Header />
      
      <section id="articles-list">
        <Article title="titulo" provider="provedor"/>
      </section>
      
      </>
        
    );
  }

}

export default App;
