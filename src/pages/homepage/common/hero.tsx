"use client";

import CustomButton from "@/components/btn";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Hero = () => {
  const { address } = useAccount();
  const [btnText, setBtnText] = useState<string>("Get Started");
  const [href, setHref] = useState<string>("/auth");

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loginUser = async () => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:4000/user/login",
        { walletId: address },
        { headers: { "Content-Type": "application/json" } }
      );
      if (loginResponse.status === 200) {
        document.cookie = `pavoce=${loginResponse.data.token}`;
        setHref("/profile");
        setBtnText("Go To Dashboard");
        localStorage.setItem("status", JSON.stringify("loggedIn"));
      } else return;
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    const statusFromStorage = localStorage.getItem("status");
    const userStatus = statusFromStorage && JSON.parse(statusFromStorage);
    if (!userStatus && address) {
      loginUser();
    }
    if (statusFromStorage && address) {
      setHref("/profile");
      setBtnText("Go To Dashboard");
    }
    if (!address) {
      setBtnText("Get Started");
      setHref("/");
      deleteCookie("pavoce");
      localStorage.removeItem("status");
    }
  }, [address, loginUser]);

  return (
    <div className="flex items-center flex-col gap-6 mt-16 text-center min-h-[80vh]">
      <h1 className="text-xxxl font-bold sentient leading-tight capitalize text-darkBlue">
        Send invoices and receive payments effortlessly
      </h1>
      <p className="text-md w-[70%]">
        Experience the ease of managing your invoices with our secure and
        user-friendly interface, and accept international payments in fiats and
        cryptocurrencies
      </p>
      <div className="center gap-6">
        <Link href={href}>
          <CustomButton
            onClick={() => {}}
            padding="10px 30px"
            background="#3A62F2"
            textColor="#FFFFFF"
          >
            {btnText}
          </CustomButton>
        </Link>
        <div>
          <CustomButton onClick={() => {}} border="2px solid #3A62F2">
            <AiOutlinePlayCircle color="#3A62F2" />
            <p>Watch Demo</p>
          </CustomButton>
        </div>
      </div>
      <div>
        <Image src="/images/mockup.png" alt="mockup" width={500} height={590} />
      </div>
    </div>
  );
};

export default Hero;
