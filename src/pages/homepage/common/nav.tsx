'use client';

import Logo from "./logo";
import Link from "next/link";
import { Web3Button } from '@web3modal/react';

const Navbar = () => {
    return (
        <nav className="between w-full">
            <div>
                <Logo />
            </div>
            <div className="w-[80%] center">
                <ul className="center gap-6 capitalize font-semibold">
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="#">How it works</Link>
                    </li>
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="#">Features</Link>
                    </li>
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="#">Roadmap</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Web3Button label={undefined} avatar={undefined} balance={undefined} icon={undefined} />
            </div>
        </nav>
    );
}
 
export default Navbar;