'use client';

import React, { useState } from 'react';
import Logo from "@/pages/homepage/common/logo";
import ProfileNav from "./navbar";
import { DashboardUtils } from '@/utils/dashboard';
import Image from 'next/image';

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabSelect = (index: any) => {
        setActiveTab(index);
    };

    const renderTabContent = () => {
        switch (activeTab) {
          case 0:
            return <Account />;
          case 1:
            return <MyProduct />;
          case 2:
            return <Add />;
          case 3:
            return <Track />;
          default:
            return null;
        }
    };

    return (
        <div className="w-full h-screen center">
            <div className="w-[20%] pt-10 bg-lightBlue h-full flex items-center flex-col">
                <div className="w-1/2">
                    <Logo />
                </div>
                <div className='flex mt-10 w-[80%] flex-col'>
                    {DashboardUtils.map((tab, index) => (
                        <div
                            key={index}
                            className={`flex items-center rounded-lg gap-3  cursor-pointer font-semibold leading-tight p-3 transition duration-300 ${
                            index === activeTab ? 'bg-[#c4cdee] font-semibold' : 'font-normal'
                            }`}
                            onClick={() => handleTabSelect(index)}
                        >
                            <Image src={tab.icon} alt="icon" width={25} height={25} />
                            <p className='capitalize'>{tab.tab}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[80%] h-full pr-16">
                <ProfileNav />
            </div>
        </div>
    );
}
 
export default Dashboard;