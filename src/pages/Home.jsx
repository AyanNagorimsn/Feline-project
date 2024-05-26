import { useState } from "react";

import "../App.scss";
import Navbar from "../components/Navbar";

function Home() {
    const [activeNavLink, setActiveNavLink] = useState(0);
    return (
        <header>
            <Navbar active={activeNavLink} />
            <div className="container flex justify-start items-center min-h-screen ">
                <div>
                    <h1 className="font-cool text-[7vw] leading-[1.1]">
                        WELCOME <br /> TO{" "}
                        <span className="text-gradient font-bold mt-3">
                            FELINE
                        </span>
                    </h1>
                    <h3 className="text-xl text-grey mt-2 font-semibold">
                        Your Ultimate Guide to Cat Breeds
                    </h3>
                    <button className="btn text-sm py-2.5 px-5 mt-6 font-semibold">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
   
}

export default Home;
