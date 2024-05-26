import { useState } from "react";

import "../App.scss";
import Navbar from "../components/Navbar";

function Home() {
  const [activeNavLink, setActiveNavLink] = useState(0);
  return (
    <>
      <header>
        <Navbar active={activeNavLink} />
        <div className="container flex justify-start items-center min-h-screen ">
          <div>
            <h1 className="font-cool text-[7vw] leading-[1.1]">
              WELCOME <br /> TO <span className="text-gradient font-bold mt-3">FELINE</span>
            </h1>
            <h3 className="text-xl text-grey mt-2 font-semibold">
              Your Ultimate Guide to Cat Breeds
            </h3>
            <button className="btn text-lg mt-6 ">Get Started</button>
          </div>
        </div>
      </header>

      <section className="container h-screen flex justify-around items-center pt-24">
        <div className="h-[85%]">
          <img className="h-full" src="src\assets\ctaimage.png" alt="ctaImage" />
        </div>
        <div className="w-[45%]">
          <h1 className="font-cool text-[5vw] leading-[1.1]">Discover the World of Cats</h1>
          <p className="text-lg text-grey mt-4">
            At Feline, we are passionate about cats and dedicated to providing you with
            comprehensive information on every cat breed. Whether you're a lifelong cat lover, a
            prospective pet owner, or simply curious about our feline friends, you've come to the
            right place!
          </p>

          <button className="btn mt-6">Explore Database</button>
        </div>
      </section>
    </>
  );
}

export default Home;
