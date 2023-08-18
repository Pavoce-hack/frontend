"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
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
  }, [address, pathname, router]);

  return (
    <div className="ended gap-3">
      <ConnectButton />
    </div>
  );
};

export default ProfileNav;
