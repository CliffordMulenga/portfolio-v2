/* eslint-disable no-unused-vars */
import * as React from "react";
import { motion } from "framer-motion";

/**
 * Utility for conditional class merging.
 * Replaces the need for 'clsx' and 'tailwind-merge' in this standalone file.
 */
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * AnimatedText Component
 * Animates text letter-by-letter with a synchronized underline effect.
 */
const AnimatedText = React.forwardRef(
  (
    {
      text,
      duration = 0.05,
      delay = 0.03,
      replay = true,
      className,
      textClassName,
      underlineClassName,
      as: Component = "h1",
      underlineGradient = "from-blue-500 via-purple-500 to-pink-500",
      underlineHeight = "h-1",
      underlineOffset = "-bottom-2",
      ...props
    },
    ref
  ) => {
    const letters = Array.from(text);

    const container = {
      hidden: {
        opacity: 0,
      },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: duration,
          delayChildren: i * delay,
        },
      }),
    };

    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    };

    const lineVariants = {
      hidden: {
        width: "0%",
        left: "50%",
      },
      visible: {
        width: "100%",
        left: "0%",
        transition: {
          delay: letters.length * duration + delay,
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center gap-2", className)}
        {...props}
      >
        <div className="relative">
          <motion.div
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            whileInView={replay ? "visible" : "hidden"}
            viewport={{ once: true }}
            className={cn("text-4xl font-bold text-center", textClassName)}
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={child}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
              "absolute",
              underlineHeight,
              underlineOffset,
              "bg-gradient-to-r",
              underlineGradient,
              underlineClassName
            )}
          />
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

/**
 * Example Usage / Preview Component
 */
export default function TypingText(name) {
    console.log(name.name)
  return (
    <div className="">
      <AnimatedText 
        text={name.name}
        textClassName="hidden text-sm font-semibold tracking-[0.2em] uppercase sm:block"
        underlineGradient="from-cyan-400 to-blue-600"
        
      />
      
    </div>
  );
}