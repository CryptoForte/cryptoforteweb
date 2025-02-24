import { Link } from "react-router";
import { navItems } from "../../lib";
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { NavBurger } from "./navburger";
import { MobileDrawer } from "./mobileDrawer";
import { useStopAllScroll } from "../../hooks";

const Navbar = () => {
  return (
    <NavScrollWrapper>
      <div className="flex h-[80px] w-full items-center justify-between">
        <Link to="/">
          <img
            src="/images/logo/cryptoforte_logo.png"
            className="h-16 w-auto"
            alt="crypto forte logo"
          />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-12">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="text-secondary hover:text-red-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="bg-secondary rounded-md px-5 py-2.5 text-sm font-medium text-white shadow"
                href="#"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </NavScrollWrapper>
  );
};

export default Navbar;

const NavScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = "";

  const { scrollY } = useScroll();

  useStopAllScroll({ condition: open });

  useEffect(() => {
    let lastScrollY = 0;

    return scrollY.onChange((current) => {
      if (current > 150) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      if (!open) {
        if (current > 150 && current > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
      lastScrollY = current;
    });
  }, [scrollY, open]);

  return (
    <motion.nav
      initial={false}
      animate={{
        y: hidden ? -60 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className={`fixed top-0 left-0 z-30 flex h-[80px] w-full items-center justify-center px-[5%] text-sm ${
        hasScrolled && !open
          ? "shadow-lg drop-shadow-lg backdrop-blur-sm backdrop-filter"
          : ""
      }`}
    >
      <div className="flex w-full items-center justify-between lg:items-end">
        {children}
        <NavBurger open={open} setOpen={setOpen} />
      </div>
      <MobileDrawer open={open} setOpen={setOpen} pathname={location} />
    </motion.nav>
  );
};
