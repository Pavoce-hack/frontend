'use client';

import Image from "next/image";
import React, { useState } from "react";
import { useInvoiceContext } from "@/context/contextProvider";
import { useAccount } from "wagmi";

const CreateInvoice: React.FC = () => {
    const { InvoiceInfo } = useInvoiceContext();
    const { address } = useAccount();
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [duration, setduration] = useState("");
    const [service, setservice] = useState("");

    return (
        <div className="w-full center flex-col gap-6">
             <h2 className="font-bold text-lg text-left w-full ml-10 ">
                Create Invoice
            </h2>
            <div className="flex justify-between w-full">
                <div className="w-[40%] p-8 flex flex-col gap-4 ">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="client-name">Client Name</label>
                        <input
                            type="text"
                            placeholder="Enter client name"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            name="clientName"
                            required
                            id="client-name"
                            className="border outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="client-name">Client Email</label>
                        <input 
                            type="email" 
                            name="client-email"
                            id="client-email" 
                            required
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            placeholder="Enter client email"
                            className='border  outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="duration">Duration: (in days)</label>
                        <input
                            type="number" 
                            name="duration" 
                            placeholder="Enter duration" 
                            id="duration"
                            required
                            value={duration}
                            onChange={(e) => setduration(e.target.value)}
                            className='border  outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="serviceTitle">Service Title</label>
                        <input 
                            type="text"
                            name="serviceTitle"
                            placeholder="Enter service title"
                            id="serviceTitle"
                            value={service}
                            onChange={(e) => setservice(e.target.value)}
                            className='border  outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="serviceDesc">Service Description</label>
                        <input type="text" name="serviceDesc" placeholder="Enter service description" id="serviceDesc" className='border  outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="Qty">Qty</label>
                        <input type="number" name="Qty" placeholder="0" id="Qty" className='border  outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="Rate">Rate</label>
                        <input type="number" name="Rate" placeholder="100" id="Rate" className='border  outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="walletAddress">Wallet Address</label>
                        <input type="text" placeholder="Enter your wallet address" name="walletAddress" id="walletAddress" className='border outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="installment">Installment</label>
                        <input type="number" placeholder="2" name="installment" id="installment" className='border outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="initialDeposit">Initial Deposit %</label>
                        <input type="number" placeholder="100%" name="initialDeposit" id="initialDeposit" className='border outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="discount">Discount %</label>
                        <input type="number" placeholder="10%" name="discount" id="discount" className='border outline-none border-DarkGray px-5 py-3 text-black rounded-lg bg-[#F7F7F7]' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="terms">Terms and Conditions</label>
                        <textarea name="terms" id="terms" className="border outline-none border-DarkGray px-5 py-3 rounded-lg bg-[#F7F7F7]" placeholder="Less than 250 characters."></textarea>
                    </div>
                </div>
                <div className="w-[59%] h-screen border border-DarkGray rounded-lg p-8">
                    {InvoiceInfo && (
                        <div className="w-full between">
                            <div>
                                <h3 className="font-bold text-md">{InvoiceInfo.businessName}</h3>
                                <p className="text-sm">{InvoiceInfo.businessEmail}</p>
                            </div>
                            <div className="mr-10">
                                <Image src="/icons/logo.png" alt="business photo" width={40} height={40}/>
                            </div>
                        </div>
                    )}
                    <div className="center mt-16">
                        <div className="w-[60%] flex flex-col min-h-[160px]">
                            <h4 className="font-semibold text-md mb-3">BILL TO</h4>
                            <p className="w-full break-all">{clientName}</p>
                            <p className="w-full break-all">{clientEmail}</p>
                        </div>
                        <div className="w-[40%] flex flex-col min-h-[100px]">
                            <p className="font-semibold">Wallet address:</p>
                            <p className="text-[0.9rem] w-full break-all">{address}</p>
                            <p className="font-semibold mt-4">Currency:</p>
                            <p className="text-[0.9rem] w-full break-all">XRP</p>
                            <p className="font-semibold mt-4">Duration: {duration} day(s)</p>
                        </div>
                    </div>
                    <div className="rounded-lg bg-DarkGray p-2 my-3"></div>
                </div>
            </div>
        </div>
    );
}
 
export default CreateInvoice;