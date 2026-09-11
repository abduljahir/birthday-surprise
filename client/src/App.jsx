import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

import Intro from "./components/Intro";
import BirthdayReveal from "./components/BirthdayReveal";
import Memories from "./components/Memories";
import SecretMessage from "./components/SecretMessage";
import FinalReveal from "./components/FinalReveal";

function App() {
  const [stage, setStage] = useState("intro");
  const [birthday, setBirthday] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/birthday")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load birthday data");
        }

        return response.json();
      })
      .then((data) => {
        setBirthday(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const celebrate = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      startVelocity: 45,
      origin: {
        y: 0.65
      }
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: {
          x: 0.1,
          y: 0.7
        }
      });
    }, 300);

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: {
          x: 0.9,
          y: 0.7
        }
      });
    }, 600);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >
          🎁
        </motion.div>

        <p>Preparing something special...</p>
      </div>
    );
  }

  if (!birthday) {
    return (
      <div className="error-screen">
        <h2>Something went wrong 😢</h2>
        <p>Make sure the Node.js server is running.</p>
      </div>
    );
  }

  return (
    <main className="app">

      <Background />

      <div className="top-title">
        A LITTLE SURPRISE ✨
      </div>

      <AnimatePresence mode="wait">

        {stage === "intro" && (
          <Intro
            key="intro"
            birthday={birthday}
            onOpen={() => {
              celebrate();

              setTimeout(() => {
                setStage("birthday");
              }, 900);
            }}
          />
        )}

        {stage === "birthday" && (
          <BirthdayReveal
            key="birthday"
            birthday={birthday}
            onNext={() => setStage("memories")}
          />
        )}

        {stage === "memories" && (
          <Memories
            key="memories"
            birthday={birthday}
            onNext={() => setStage("secret")}
          />
        )}

        {stage === "secret" && (
          <SecretMessage
            key="secret"
            birthday={birthday}
            onNext={() => {
              celebrate();
              setStage("final");
            }}
          />
        )}

        {stage === "final" && (
          <FinalReveal
            key="final"
            birthday={birthday}
            onCelebrate={celebrate}
          />
        )}

      </AnimatePresence>

    </main>
  );
}

function Background() {
  return (
    <>
      <div className="background">

        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>

      </div>

      <div className="particles">

        {Array.from({ length: 35 }).map((_, index) => (

          <motion.span
            key={index}
            className="particle"

            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: Math.random()
            }}

            animate={{
              x: [
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`
              ],

              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`
              ]
            }}

            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

        ))}

      </div>
    </>
  );
}

export default App;