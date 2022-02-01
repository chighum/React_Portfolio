import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Background from "./pages/About/Background";
import Coding from "./pages/About/Coding";
import Hobbies from "./pages/About/Hobbies";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <main className="my-5 py-5 min-vh-100">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/background">
            <Header />
            <Background />
          </Route>
          <Route exact path="/coding">
            <Header />
            <Coding />
          </Route>
          <Route exact path="/hobbies">
            <Header />
            <Hobbies />
          </Route>
          <Route exact path="/projects">
            <Header />
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Header />
            <Resume />
          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
