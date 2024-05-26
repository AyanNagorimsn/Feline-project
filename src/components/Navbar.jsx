import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ activeNavLink }) => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      controls.start({
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
      });
    } else {
      controls.start({
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      });
    }
  }, [scrollY, controls]);

  return (
    <motion.nav
      className="fixed top-0 w-full duration-300 py-2"
      animate={controls}
      initial={{ backgroundColor: "transparent", backdropFilter: "blur(0px)" }}
    >
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-cool">FELINE</h1>

        <ul className="flex gap-7">
          {["Home", "Explore", "Featured Breed", "Why Feline", "About Us"].map((item, i) => (
            <li
              className={`py-1 flex text-sm font-semibold ${
                activeNavLink === i ? "text-primary" : ""
              }`}
              key={item}
            >
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>

        <button className="btn text-sm font-semibold">View Breeds</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
