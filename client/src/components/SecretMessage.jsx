import { motion } from "framer-motion";

function SecretMessage({ birthday, onNext }) {
  return (
    <motion.section
      className="screen"

      initial={{
        opacity: 0
      }}

      animate={{
        opacity: 1
      }}
    >

      <motion.div
        className="message-card"

        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}
      >

        <motion.div
          className="heart"

          animate={{
            scale: [1, 1.2, 1]
          }}

          transition={{
            duration: 1.3,
            repeat: Infinity
          }}
        >
          ❤️
        </motion.div>

        <div className="eyebrow">
          A LITTLE MESSAGE FOR YOU
        </div>

        <h2>
          You are <span>Special</span>
        </h2>

        <div className="typewriter">

          {birthday.secretMessage.map(
            (message, index) => (

              <motion.p
                key={index}

                initial={{
                  opacity: 0,
                  y: 15
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: 0.5 + index * 0.6
                }}

                className={
                  index ===
                  birthday.secretMessage.length - 1
                    ? "final-line"
                    : ""
                }
              >
                {message}
              </motion.p>

            )
          )}

        </div>

        <motion.button
          className="primary-button"

          onClick={onNext}

          whileHover={{
            scale: 1.05
          }}
        >
          Final Surprise ✨
        </motion.button>

      </motion.div>

    </motion.section>
  );
}

export default SecretMessage;