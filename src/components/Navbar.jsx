const Navbar = () => {
  return (
    <nav className="container flex justify-between align-center ">
      <h1 className="text-primary text-3xl">FELINE</h1>

      <ul className="flex align-center gap-4">
        {["Home", "Explore", "Featured Breed", "Why Feline", "About Us"].map((item) => (
          <li className="py-1" key={item}>
            <a href={item}>{item}</a>
          </li>
        ))}
      </ul>

      <button className="border-2 border-primary rounded-full p-4">View Breeds</button>
    </nav>
  );
};

export default Navbar;
