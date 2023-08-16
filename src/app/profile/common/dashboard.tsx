'use client';

import React, { useState } from 'react';
import Logo from "@/pages/homepage/common/logo";
import ProfileNav from "./navbar";
import { DashboardUtils } from '@/utils/dashboard';
import Image from 'next/image';
import Transaction from './transcaction';
import Client from './client';
import Profile from './profile';
import Invoice from './invoice';
import CreateInvoice from './createInvoice';

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabSelect = (index: any) => {
        setActiveTab(index);
    };

    const renderTabContent = () => {
        switch (activeTab) {
          case 0:
            return <Profile />;
          case 1:
            return <CreateInvoice />;
          case 2:
            return <Invoice />;
          case 3:
            return <Client />;
          case 4:
            return <Transaction />;
          default:
            return null;
        }
    };

    return (
        <div className="w-full h-screen center overflow-y-hidden">
            <div className="w-[20%] pt-10 bg-lightBlue h-screen flex items-center flex-col">
        <div className="w-full h-screen center">
            <div className="w-[20%] pt-10 bg-lightBlue h-full flex items-center flex-col">
                <div className="w-[80%]">
                    <Logo />
                </div>
                <div className='flex mt-20 w-[80%] flex-col'>
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
            <div className="w-[80%] h-full pr-16 overflow-y-scroll">
                <ProfileNav />
                {renderTabContent()}
            </div>
        </div>
    );
}
 
export default Dashboard;