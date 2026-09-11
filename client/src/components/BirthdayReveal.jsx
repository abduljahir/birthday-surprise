import { motion } from "framer-motion";

function BirthdayReveal({ birthday, onNext }) {
  return (
    <motion.section
      className="screen"

      initial={{
        opacity: 0,
        scale: 0.9
      }}

      animate={{
        opacity: 1,
        scale: 1
      }}

      exit={{
        opacity: 0,
        scale: 1.1
      }}
    >

      <div className="birthday-content">

        <motion.div
          className="cake"

          initial={{
            scale: 0,
            rotate: -20
          }}

          animate={{
            scale: 1,
            rotate: 0
          }}

          transition={{
            type: "spring",
            stiffness: 120
          }}
        >
          🎂
        </motion.div>

        <div className="eyebrow">
          TODAY IS ALL ABOUT YOU
        </div>

        <motion.h1
          className="birthday-title"

          initial={{
            y: 50,
            opacity: 0
          }}

          animate={{
            y: 0,
            opacity: 1
          }}

          transition={{
            delay: 0.4
          }}
        >
          HAPPY
          <br />

          <span>BIRTHDAY</span>
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.8
          }}
        >
          {birthday.relationship} ❤️
        </motion.h2>

        <motion.p
          className="birthday-text"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 1
          }}
        >
          {birthday.birthdayMessage}
        </motion.p>

        <motion.button
          className="outline-button"

          onClick={onNext}

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 1.3
          }}
        >
          Our Memories →
        </motion.button>

      </div>

    </motion.section>
  );
}

export default BirthdayReveal;