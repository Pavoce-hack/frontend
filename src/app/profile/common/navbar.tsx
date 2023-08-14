"use client";

import { Web3Button } from "@web3modal/react";
import { useRouter, usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import { useEffect } from "react";

const ProfileNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { address } = useAccount();

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  useEffect(() => {
    if (pathname !== "/" && !address) {
      deleteCookie("pavoce");
      router.push("/");
    }
  }, [address]);

  return (
    <div className="pt-10 ended gap-3">
      <Web3Button />
    </div>
  );
};

export default ProfileNav;
