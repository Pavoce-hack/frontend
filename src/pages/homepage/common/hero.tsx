'use client'

import CustomButton from "@/components/btn";
import Image from "next/image";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import Link from "next/link";

const Hero = () => {

    return (
        <div className="flex items-center flex-col gap-6 mt-16 text-center min-h-[80vh]">
            <h1 className="text-xxxl font-bold sentient leading-tight capitalize text-darkBlue">
                Send invoices and receive payments effortlessly
            </h1>
            <p className="text-md w-[70%]">
                Experience the ease of managing your invoices with our secure and user-friendly interface, and accept international payments in fiats and cryptocurrencies
            </p>
            <div className="center gap-6">
                <Link href="/auth">
                    <CustomButton onClick={() => {}} padding="10px 30px" background="#3A62F2" textColor="#FFFFFF">
                        Get Started
                    </CustomButton>
                </Link>
                <div>
                    <CustomButton onClick={() => {}} border="2px solid #3A62F2">
                        <AiOutlinePlayCircle color="#3A62F2"/>
                        <p>Watch Demo</p>
                    </CustomButton>
                </div>
            </div>
            <div>
                <Image src="/images/mockup.png" alt="mockup" width={500} height={590} />
            </div>
        </div>
    );
}
 
export default Hero;