import "./App.css";
import MissionStatement from "./Box";
import Test from "./Testimonials";
import Comment from "./Commentbox";
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="navbar">
          <ul className="left-nav">
            <li className="home">Hayden Moore LLC</li>
          </ul>
          <ul className="right-nav">
            <li>About Hayden</li>
            <li>Contact Me</li>
            <li>Services</li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        <div className="container">
          <MissionStatement />
        </div>
        <div>
          <Test />
          <Comment />
        </div>
        <div className="bottom-space"></div>
      </header>
      <footer>Copyright 2024</footer>
    </div>
  );
}

export default App;
