import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ activeNavLink }) => {
  const [scrollY, setScrollY] = useState(0);
  const [navStyle, setNavStyle] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", setScrollY(window.scrollY));
    };
  }, []);

  useEffect(() => {
    if (scrollY > 5) {
      setNavStyle({
        backgroundColor: "#ffffffcc",
        backdropFilter: "blur(5px)",
      });
    } else {
      setNavStyle({ backgroundColor: "#00000000", backdropFilter: "blur(0px)" });
    }
  }, [scrollY]);

  return (
    <motion.nav className="fixed top-0 w-full duration-500 py-2 bg-transparent" style={navStyle}>
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
