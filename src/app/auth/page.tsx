'use client';

import CustomButton from "@/components/btn";
import Navbar from "@/pages/homepage/common/nav";
import Link from "next/link";
import { useAccount } from 'wagmi';
import React, {useState} from "react";
import Image from "next/image";
import { useInvoiceContext } from "@/context/contextProvider";

const Auth: React.FC = () => {
    const { address } = useAccount();
    const { setInvoiceInfo } = useInvoiceContext();

    const [businessName, setBusinessName] = useState("");
    const [businessEmail, setBusinessEmail] = useState("");
    const [businessPhotoData, setBusinessPhotoData] = useState<string | null>(null);
    const [businessPhotoFile, setBusinessPhotoFile] = useState<File | null>(null);


    const handleInputChange = () => {
        // Update the context with the input data
        console.log("Updating InvoiceInfo...");
        setInvoiceInfo((prevInvoiceInfo) => ({
            ...prevInvoiceInfo,
            businessName,
            businessEmail,
            businessPhoto: prevInvoiceInfo?.businessPhoto || "",
            clientName: "",
            clientEmail: "",
            startDate: "",
            endDate: "",
            serviceTitle: "",
            serviceDescription: "",
            serviceQty: 0,
            serviceRate: 0,
            bankName: "",
            accountNumber: 0,
            installment: 0,
            initialDeposit: 0,
            tax: 0,
            discount: 0,
            terms: "",
        }));
    };
    
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target) {
                    const photoData = event.target.result as string;
                    setBusinessPhotoData(photoData);
                    setBusinessPhotoFile(selectedFile);
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    
    const handleContinue = () => {
        if (businessPhotoData) {
            setInvoiceInfo((prevInvoiceInfo) => ({
                ...prevInvoiceInfo,
                businessName: prevInvoiceInfo?.businessName || "",
                businessEmail: prevInvoiceInfo?.businessEmail || "",
                businessPhoto: businessPhotoData,
                clientName: "",
                clientEmail: "",
                startDate: "",
                endDate: "",
                serviceTitle: "",
                serviceDescription: "",
                serviceQty: 0,
                serviceRate: 0,
                bankName: "",
                accountNumber: 0,
                installment: 0,
                initialDeposit: 0,
                tax: 0,
                discount: 0,
                terms: "",
            }));
        }
    };
    



    const isContinueDisabled = !businessName || !businessEmail || !businessPhotoFile;


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
                            <label htmlFor="BusinessName" className="font-semibold">Business Name:</label>
                            <input type="text" name="BusinessName" id="businessName" placeholder="Enter your Business Name" onChange={(e) =>{handleInputChange(); setBusinessName(e.target.value)}} required className='border outline-none border-DarkGray px-5 py-3 text-black rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <label htmlFor="BusinessEmail" className="font-semibold">Business Email:</label>
                            <input required type="email" name="BusinessEmail" id="businessEmail" placeholder="Enter your Business Email" onChange={(e) => {handleInputChange(); setBusinessEmail(e.target.value)}} className='border outline-none border-DarkGray px-5 py-3 text-black rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <label htmlFor="BusinessPhoto" className="font-semibold">Upload Photo</label>
                            <input
                                type="file"
                                accept="image/*"
                                name="BusinessPhoto"
                                required
                                id="businessPhoto"
                                onChange={(e) => {
                                    handlePhotoChange(e);
                                    handleInputChange();
                                    handleContinue();
                                }}
                                className='border outline-none border-DarkGray px-5 py-3 text-black rounded-lg'
                            />
                        </div>
                        {businessPhotoData && (
                            <div className="flex flex-col gap-2 w-1/3">
                                <label className="font-semibold">Uploaded Photo</label>
                                <Image src={businessPhotoData} alt="Uploaded Business Photo" width={100} height={100} />
                            </div>
                        )}
                        <div className="end w-1/3">
                            <Link href="/profile">
                                <CustomButton onClick={() => {}} padding="10px 30px" background="#3A62F2" textColor="#FFFFFF" disabled={isContinueDisabled}>
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