'use client';

import React from "react";

const Profile: React.FC = () => {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="w-full pt-8 flex items-center flex-col">
            <h2 className="font-bold text-lg text-left w-full ml-6 mb-10">
                Dashboard
            </h2>
            <div className="between ">
                <div className="w-[42%] center gap-6 flex-wrap">
                    <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
                        <div>
                            <Image src="/svgs/total.svg" alt="total" width={20} height={20} />
                        </div>
                        <h2 className="text-xl font-bold">
                            {totalInvoiced}
                        </h2>
                        <p>
                            Total Invoiced
                        </p>
                    </div>
                    <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
                        <div>
                            <Image src="/svgs/pending.svg" alt="pending" width={20} height={20} />
                        </div>
                        <h2 className="text-xl font-bold">
                            {pendingInvoices}
                        </h2>
                        <p>
                            Pending Invoices
                        </p>
                    </div>
                    <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
                        <div>
                            <Image src="/svgs/cleared.svg" alt="cleared" width={20} height={20} />
                        </div>
                        <h2 className="text-xl font-bold">
                            {clearedInvoices}
                        </h2>
                        <p>
                            Cleared Invoices
                        </p>
                    </div>
                    <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
                        <div>
                            <Image src="/svgs/dispute.svg" alt="dispute" width={20} height={20} />
                        </div>
                        <h2 className="text-xl font-bold">
                            {disputedInvoices}
                        </h2>
                        <p>
                            Disputed Invoices
                        </p>
                    </div>
                </div>
                <div className="w-[57%] center flex-col border border-[#F7F7F7] p-3">
                    <div className="between w-full pb-3 border-b border-[#F7F7F7]">
                        <div className="flex flex-col">
                            <h3 className="font-bold text-md">
                                Upcoming Deadline
                            </h3>
                            <p>
                                You have 0 projects due today
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <Image src="/svgs/Calendar.svg" alt="calender" width={25} height={25} />
                            </div>
                            <p>{currentDateTime}</p>
                        </div>
                    </div>
                    <div className="center ">
                        <Image src="/images/play.png" alt="play" width={190} height={190} />
                    </div>
                </div>
            </div>
            <h3 className="font-semibold text-md text-left ml-6 my-6 w-full">
                Recent  Activities
            </h3>
            <div className="w-[99%] border border-[#F7F7F7] center gap-3 py-8 flex-col">
                <div>
                    <Image src="/svgs/Sparkle.svg" alt="sparkle" width={80} height={80} />
                </div>
                <div className="center flex-col">
                    <h3 className="font-semibold text-[1.5rem]">
                        No Activities yet
                    </h3>
                    <p className="text-[#5E5E5E]">
                        Send invoice to your clients and get paid
                    </p>
                </div>
            </div>
=======
        <div className="w-full pt-20 font-bold text-lg center">
            Coming soon!😥
>>>>>>> parent of 94d2f4c (completed dashboard)
=======
        <div className="w-full pt-20 font-bold text-lg center">
            Coming soon!😥
>>>>>>> parent of 94d2f4c (completed dashboard)
        </div>
    );
}
 
export default Profile;