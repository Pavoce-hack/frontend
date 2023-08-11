'use client';

import CustomButton from "@/components/btn";
import Navbar from "@/pages/homepage/common/nav";
import Link from "next/link";
import { useAccount } from 'wagmi';
import React from "react";

const Auth: React.FC = () => {
    const { address } = useAccount();


    return (
        <div className="center min-h-screen w-screen pt-10">
            <div className='w-11/12 flex items-center flex-col'>
                <Navbar />
                {address ? (
                    <div className="flex items-center flex-col gap-6 mt-16 min-h-[80vh] w-full">
                        <h2 className="text-xl font-bold text-center">
                            Just a moment...
                        </h2>
                        <p className="text-center text-md">
                            Let us know you
                        </p>
                        <div className="flex flex-col gap-2 w-1/3">
                            <label htmlFor="name" className="font-semibold">Business Name:</label>
                            <input type="text" name="name" id="businessName" placeholder="Enter your Business Name" className='border border-[#B8B8B8] outline-none border-DarkGray px-5 py-3 text-black rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <label htmlFor="photo" className="font-semibold">Upload Photo</label>
                            <input type="file" name="photo" id="businessPhoto" className='border border-[#B8B8B8] outline-none border-DarkGray px-5 py-3 text-black rounded-lg' />
                        </div>
                        <div className="end w-1/3">
                            <Link href="/profile">
                                <CustomButton onClick={() => {}} padding="10px 30px" background="#3A62F2" textColor="#FFFFFF">
                                    Continue
                                </CustomButton>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[87vh] w-full center font-semibold text-md">Connect your wallet to get started</div>
                )}
            </div>
        </div>
    );
}
 
export default Auth;