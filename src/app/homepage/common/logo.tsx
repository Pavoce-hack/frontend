'use client';

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <div className="center gap-[0.10rem] font-bold">
                <Image src="/icons/logo.png" alt="logo" width={23} height={23} />
                <p className="text-md">avoce</p>
            </div>
        </Link>
    );
}
 
export default Logo;