import "./App.css";

import { Section } from "./components/Section";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
};

export default App;

/*
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
