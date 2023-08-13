"use client";

import CustomButton from "@/components/btn";
import Navbar from "@/pages/homepage/common/nav";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { WalletContext } from "../provider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

interface UserDetails {
  fullName: string;
  walletId: string;
  businessName: string;
  profilePic: File | any;
  businessLogo: File | any;
}

const Auth = () => {
  const walletAddress = useContext(WalletContext);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    walletId: "",
    businessName: "",
    profilePic: null,
    businessLogo: null,
  });
  const [bg, setBg] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setUserDetails((prevDetails) => {
      if (name === "businessName") {
        userDetails.fullName = value;
        userDetails.businessName = value;
      }
      if (name === "businessLogo") {
        if (files) {
          userDetails.businessLogo = files[0];
          userDetails.profilePic = files[0];
          setBg(URL.createObjectURL(userDetails.businessLogo));
        }
      }
      return { ...prevDetails, walletId: walletAddress };
    });
  };
  console.log(userDetails);

  const sendWalletAddressToBackend = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/user/register",
        userDetails,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      if (response.status === 201) {
        toast.success(response.data.message);
        console.log("User details stored in the database.");
      } else {
        console.error("Failed to store user details in the database.");
      }
    } catch (error) {
      console.error("Error sending user details to backend:", error);
    }
  };

  return (
    <div className="center min-h-screen w-screen pt-10">
      <div className="w-11/12 flex items-center flex-col">
        <Navbar />
        <form
          onSubmit={sendWalletAddressToBackend}
          className="flex items-center flex-col gap-6 mt-16 min-h-[80vh] w-full"
        >
          <h2 className="text-xl font-bold text-center">Just a moment...</h2>
          <p className="text-center text-md">Let us know you</p>
          <div className="flex flex-col gap-2 w-1/3">
            <label htmlFor="name" className="font-semibold">
              Business Name:
            </label>
            <input
              type="text"
              name="businessName"
              id="businessName"
              placeholder="Enter your Business Name"
              className="border border-[#B8B8B8] outline-none border-DarkGray px-5 py-3 text-black rounded-lg"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/3 ">
            <div
              className="profilePhoto"
              style={{
                backgroundImage: `url("${bg}")`,
                width: "10rem",
                height: "10rem",
                border: "1px solid grey",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: ".5rem",
              }}
            >
              {!bg && "Profile Photo"}
            </div>
            <label htmlFor="photo" className="font-semibold">
              Upload Photo
            </label>
            <input
              type="file"
              name="businessLogo"
              id="businessPhoto"
              className="border border-[#B8B8B8] outline-none border-DarkGray px-5 py-3 text-black rounded-lg"
              onChange={handleInputChange}
              accept="image/*"
            />
          </div>
          <div className="end w-1/3">
            <CustomButton
              buttonType="submit"
              padding="10px 30px"
              background="#3A62F2"
              textColor="#FFFFFF"
            >
              Continue
            </CustomButton>

            <Link href="/profile"></Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Auth;
