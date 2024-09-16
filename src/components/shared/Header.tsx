import { useEffect, useState } from "react";
import { navLinks } from "../../lib/data";
import { ActionButton, Hexagon } from "../helpers";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      <header className="sticky z-40 top-0 bg-zinc-900/50 backdrop-blur-lg">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div className="">
              <img src="/assets/images/logo.svg" alt="LOGO" className="" />
            </div>
            <div className="flex gap-4 items-center">
              {/* Button */}
              <ActionButton btnText="Get Started" className="max-md:hidden" />
              {/* Hamburger */}
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="size-10 relative cursor-pointer"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
                  <div
                    className={cn(
                      "w-5 h-0.5 bg-zinc-300",
                      isOpen ? "rotate-45" : "-translate-y-1"
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
                  <div
                    className={cn(
                      "w-5 h-0.5 bg-zinc-300",
                      isOpen ? "-rotate-45" : "translate-y-1"
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 md:mt-28 mt-24 z-0">
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={700} className="size-[700px]" />
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={1100} className="size-[1100px]" />
              </div>
              <div className="h-full flex justify-center items-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navLinks.map(({ name, path }, index) => (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "linear",
                      }}
                      key={index}
                      href={path}
                    >
                      <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300">
                        {name}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
