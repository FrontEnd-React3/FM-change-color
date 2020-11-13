import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="container">
      <article className="info">
        <header className="header">
          <span className="subtitle">React Animation</span>
          <h1 className="title">Reveal on Scroll-up</h1>
        </header>
        <section className="content">
          <p>
            Using Framer Motion, the actions bar at the bottom of the screen
            only fades in when scrolled up and fades out whenever we scroll
            down.
          </p>
        </section>
      </article>
      <Actions />
    </div>
  );
}

function Actions() {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingRed = yPos > 65 && yPos < 85 ;
      console.log("yPos" + yPos);
      console.log("isScrollingRed" + isScrollingRed);
      setShouldShowActions(isScrollingRed);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };      

  }, [lastYPos]);console.log("lastYPos" + lastYPos);

  return (
    <motion.div
      className="actions"
      initial={{ background: "white" }}
      animate={{ background: shouldShowActions ? "red" : "white" }}
      transition={{ background: { duration: 0.2 } }}
    >
      <button>
        <span className="fas fa-share-square" />
      </button>
      <button>
        <span className="fas fa-user" />
      </button>
      <button>
        <span className="fas fa-times" />
      </button>
    </motion.div>
  );
}

export default App;
