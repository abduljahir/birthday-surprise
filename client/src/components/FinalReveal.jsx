import { motion } from "framer-motion";

function FinalReveal({ birthday, onCelebrate }) {
  return (
    <motion.section
      className="screen final-screen"

      initial={{
        opacity: 0
      }}

      animate={{
        opacity: 1
      }}
    >

      <motion.div
        className="final-content"

        initial={{
          scale: 0.5,
          opacity: 0
        }}

        animate={{
          scale: 1,
          opacity: 1
        }}

        transition={{
          duration: 1,
          type: "spring"
        }}
      >

        <motion.div
          className="final-heart"

          animate={{
            scale: [1, 1.2, 1]
          }}

          transition={{
            duration: 1.2,
            repeat: Infinity
          }}
        >
          ❤️
        </motion.div>

        <div className="eyebrow">
          ONCE AGAIN...
        </div>

        <h1>
          HAPPY
          <br />
          <span>BIRTHDAY</span>
        </h1>

        <h2>
          🎉 {birthday.name} 🎉
        </h2>

        <p>
          Here's to another year of amazing adventures,
          unforgettable memories and countless reasons to smile.
        </p>

        <div className="signature">
          Made with ❤️ just for you
        </div>

        <motion.button
          className="small-button"

          onClick={onCelebrate}

          whileTap={{
            scale: 0.9
          }}
        >
          🎉 Celebrate Again
        </motion.button>

      </motion.div>

    </motion.section>
  );
}

export default FinalReveal;