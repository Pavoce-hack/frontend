'use client'

import Hero from "./common/hero";
import Navbar from "./common/nav";

const Homepage = () => {
    return (
        <div className="w-full flex-col center pt-10">
            <Navbar />
            <Hero />
        </div>
    );
}
 
export default Homepage;
