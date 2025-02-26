import { FC } from "react";
import { motion } from "motion/react";

export interface NavBurgerProps {
  open: Readonly<boolean>;
  setOpen:
    | React.Dispatch<React.SetStateAction<boolean>>
    | ((value: boolean) => void);
}

export const NavBurger: FC<NavBurgerProps> = ({ open, setOpen }) => {
  const transition = {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
    times: [0, 1],
  };

  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setTimeout(() => setOpen(false), 50);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ willChange: "transform" }}
      className="relative z-30 flex h-full max-h-[32px] w-full max-w-[32px] shrink-0 flex-col items-center justify-center gap-y-2 lg:hidden"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: open ? -45 : 0,
          y: open ? 10 : 0,
        }}
        transition={transition}
        className="h-[2.5px] w-8 origin-center bg-black"
        style={{ willChange: "transform" }}
      />
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 0 : 1,
        }}
        transition={transition}
        className="h-[2.5px] w-8 bg-black"
        style={{ willChange: "transform" }}
      />
      <motion.div
        initial={false}
        animate={{
          rotate: open ? 45 : 0,
          y: open ? -10 : 0,
        }}
        transition={transition}
        className="h-[2.5px] w-8 origin-center bg-black"
        style={{ willChange: "transform" }}
      />
    </button>
  );
};

// const topBarVariants = {
//   closed: {
//     rotate: 0,
//     y: 0,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
//   open: {
//     rotate: -45,
//     y: 10,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
// };

// const middleBarVariants = {
//   closed: {
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//     },
//   },
//   open: {
//     opacity: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
// };

// const bottomBarVariants = {
//   closed: {
//     rotate: 0,
//     y: 0,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
//   open: {
//     rotate: 45,
//     y: -10,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
// };
