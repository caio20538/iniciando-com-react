import React from "react";
import './styles/app2.css'
import Header from "./components/Header/header";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {

  render() {
    return(
      <>
      <Header />

      <Counter />
      
      {/*<section id="articles-list">
        <Article title="titulo" provider="provedor"/>
      </section>
      */}
      
      </>
        
    );
  }

}

export default App;
