import React from "react";
import MissionStatement from "./Box";
import Test from "./Testimonials";
import Comment from "./Commentbox";

function Home() {
  return (
    <div className="App">
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
    </div>
  );
}

export default Home;
