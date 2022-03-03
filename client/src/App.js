import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Header />
        <main className="my-5 py-5 min-vh-100">
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/background" element={<Background />}>
            </Route>
            <Route exact path="/coding" element={<Coding />}>
            </Route>
            <Route exact path="/hobbies" element={<Hobbies />}>
            </Route>
            <Route exact path="/projects" element={<Projects />}>
            </Route>
            <Route exact path="/contact" element={<Contact />}>
            </Route>
            <Route exact path="/resume" element={<Resume />}>
            </Route>
          </Routes>
          <Route exact path="/" element={}>
            <Home />
          </Route>
          <Route exact path="/background">
            <Background />
          </Route>
          <Route exact path="/coding">
            <Coding />
          </Route>
          <Route exact path="/hobbies">
            <Hobbies />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
