import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Memories({ birthday, onNext }) {

  const [selected, setSelected] = useState(null);

  return (
    <motion.section
      className="screen memories-screen"

      initial={{
        opacity: 0
      }}

      animate={{
        opacity: 1
      }}

      exit={{
        opacity: 0
      }}
    >

      <div className="section-heading">

        <div className="eyebrow">
          A FEW LITTLE MOMENTS
        </div>

        <h2>
          Our <span>Memories</span>
        </h2>

        <p>
          Some moments deserve to be remembered forever.
        </p>

      </div>

      <div className="memory-grid">

        {birthday.memories.map((memory, index) => (

          <motion.div
            className="memory-card"
            key={index}

            initial={{
              opacity: 0,
              y: 50,
              rotate: index % 2 === 0 ? -5 : 5
            }}

            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? -2 : 2
            }}

            transition={{
              delay: index * 0.15
            }}

            whileHover={{
              scale: 1.06,
              rotate: 0
            }}

            onClick={() => setSelected(memory)}
          >

            <img
              src={`http://localhost:5000${memory.image}`}
              alt="Memory"
            />

            <div className="memory-overlay">
              View memory
            </div>

            <div className="photo-number">
              0{index + 1}
            </div>

          </motion.div>

        ))}

      </div>

      <motion.button
        className="primary-button"

        onClick={onNext}

        whileHover={{
          scale: 1.05
        }}
      >
        There's One More Surprise 👀
      </motion.button>


      <AnimatePresence>

        {selected && (

          <motion.div
            className="modal"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            exit={{
              opacity: 0
            }}

            onClick={() => setSelected(null)}
          >

            <motion.div
              className="modal-content"

              initial={{
                scale: 0.7
              }}

              animate={{
                scale: 1
              }}

              onClick={(event) => event.stopPropagation()}
            >

              <button
                className="close-button"
                onClick={() => setSelected(null)}
              >
                ×
              </button>

              <img
                src={`http://localhost:5000${selected.image}`}
                alt="Memory"
              />

              <p>
                {selected.caption}
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.section>
  );
}

export default Memories;