const Navbar = ({ active }) => {
  return (
    <nav className="fixed top-0 w-full pt-4">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-cool">FELINE</h1>

        <ul className="flex gap-7">
          {["Home", "Explore", "Featured Breed", "Why Feline", "About Us"].map((item, i) => (
            <li
              className={`py-1 flex text-sm font-semibold ${active === i ? "text-primary" : ""}`}
              key={item}
            >
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>

        <button className="btn text-sm py-2.5 px-5 font-semibold">
          View Breeds
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
