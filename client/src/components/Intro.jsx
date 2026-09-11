import { motion } from "framer-motion";

function Intro({ birthday, onOpen }) {
  return (
    <section className="screen intro-screen">

      <motion.div
        className="intro-content"

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}
      >

        <div className="eyebrow">
          SOMEONE SPECIAL HAS A SURPRISE
        </div>

        <motion.div
          className="intro-emoji"

          animate={{
            y: [0, -15, 0],
            rotate: [-5, 5, -5]
          }}

          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          🎁
        </motion.div>

        <h1>
          Hey <span>{birthday.name}</span> 👀
        </h1>

        <p>
          {birthday.intro}
        </p>

        <motion.button
          className="primary-button"

          onClick={onOpen}

          whileHover={{
            scale: 1.08
          }}

          whileTap={{
            scale: 0.94
          }}
        >
          🎁 Open Your Surprise
        </motion.button>

        <div className="hint">
          Tap the button... I promise it's worth it ✨
        </div>

      </motion.div>

    </section>
  );
}

export default Intro;