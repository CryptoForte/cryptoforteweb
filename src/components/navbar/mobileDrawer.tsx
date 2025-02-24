import { navItems } from "../../lib";
import { Link } from "react-router";
import { FC, PropsWithChildren } from "react";
import { motion } from "motion/react";

export interface MobileDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  open,
  setOpen,
  pathname,
}) => {
  function handleClose() {
    setOpen(false);
  }

  return (
    <MobileDrawerWrapper open={open}>
      <div className="flex w-full flex-col gap-[42px] bg-gradient-to-b from-white to-[#9AF4F8] px-[5%] pt-8 text-xl font-semibold text-black lg:hidden">
        {navItems.map((navlink) => (
          <Link
            to={navlink.to}
            key={navlink.label}
            onClick={handleClose}
            className={`hover:text-[#366CF0] ${
              pathname === navlink.to ? "text-gray-400" : ""
            }`}
          >
            {navlink.label}
          </Link>
        ))}

        <a
          className="bg-secondary flex w-full items-center justify-center rounded-md px-5 py-4 text-base font-medium text-white shadow"
          href="#"
        >
          Join Community
        </a>
      </div>
    </MobileDrawerWrapper>
  );
};

interface MobileDrawerWrapperProps {
  open: Readonly<boolean>;
}

export const MobileDrawerWrapper: FC<
  MobileDrawerWrapperProps & PropsWithChildren
> = ({ open, children }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: open ? `calc(100vh - 60px)` : 0,
        scaleY: open ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        times: [0, 1],
        height: {
          duration: 0.3,
          ease: "easeInOut",
        },
        scaleY: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      style={{
        transformOrigin: "top",
      }}
      className="fixed top-[60px] left-0 flex w-full justify-center overflow-hidden uppercase lg:hidden"
    >
      {children}
    </motion.div>
  );
};
