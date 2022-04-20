import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Background from "./pages/About/Background";
import Coding from "./pages/About/Coding";

function App() {
  const routes = [
    { path: "/", Component: Home },
    { path: "/background", Component: Background },
    { path: "/coding", Component: Coding },
    { path: "/projects", Component: Projects },
    { path: "/contact", Component: Contact },
    { path: "/resume", Component: Resume },
  ];
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="my-5 py-5 min-vh-100">
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path} element={<Component />}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
            {/* <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/background" element={<Background />}></Route>
            <Route exact path="/coding" element={<Coding />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/resume" element={<Resume />}></Route> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
