"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import currentDateTime from "./date-time";
import axios from "axios";
import { InvoiceDocument } from "@/utils/invoice";

const Profile: React.FC = () => {
  const [totalInvoiced, setTotalInvoiced] = useState(0);
  const [pendingInvoices, setPendingInvoices] = useState(0);
  const [clearedInvoices, setClearedInvoices] = useState(0);
  const [disputedInvoices, setDisputedInvoices] = useState(0);
  const cookie = document.cookie.slice(7);

  const config = {
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-Type": "application/json",
    },
  };

  const getAllInvoices = async () => {
    // Logic to fetch invoices by userId
    const invoicesResponse = await axios.get(
      "http://localhost:4000/invoice/user-invoices",
      config
    );
    if (invoicesResponse.status === 200) {
      setTotalInvoiced(invoicesResponse.data.requiredInvoices.length);
      setPendingInvoices(
        invoicesResponse.data.requiredInvoices.filter(
          (invoice: { status: string }) => invoice.status !== "Complete"
        ).length
      );
      handleInvoiceCleared(invoicesResponse.data.requiredInvoices);
      handleInvoiceDisputed(invoicesResponse.data.requiredInvoices);
    }
  };

  const handleInvoiceCleared = (allInvoices: InvoiceDocument[]) => {
    // Logic to mark an invoice as cleared
    const cleared = allInvoices.filter(
      (invoice) => invoice.status === "Complete"
    );
    setClearedInvoices(cleared.length);
  };

  const handleInvoiceDisputed = (allInvoices: InvoiceDocument[]) => {
    // Logic to mark an invoice as disputed
    const disputed = allInvoices.filter(
      (invoice) => invoice.status === "Disputed"
    );
    setDisputedInvoices(disputed.length);
  };

  useEffect(() => {
    getAllInvoices();
  });

  return (
    <div className="w-full pt-8 flex items-center flex-col">
      <div className="between">
        <div className="w-[42%] center gap-6 flex-wrap">
          <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
            <div>
              <Image src="/svgs/total.svg" alt="total" width={20} height={20} />
            </div>
            <h2 className="text-xl font-bold">{totalInvoiced}</h2>
            <p>Total Invoiced</p>
          </div>
          <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
            <div>
              <Image
                src="/svgs/pending.svg"
                alt="pending"
                width={20}
                height={20}
              />
            </div>
            <h2 className="text-xl font-bold">{pendingInvoices}</h2>
            <p>Pending Invoices</p>
          </div>
          <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
            <div>
              <Image
                src="/svgs/cleared.svg"
                alt="cleared"
                width={20}
                height={20}
              />
            </div>
            <h2 className="text-xl font-bold">{clearedInvoices}</h2>
            <p>Cleared Invoices</p>
          </div>
          <div className="center w-[45%] flex-col border border-[#F7F7F7] p-4">
            <div>
              <Image
                src="/svgs/dispute.svg"
                alt="dispute"
                width={20}
                height={20}
              />
            </div>
            <h2 className="text-xl font-bold">{disputedInvoices}</h2>
            <p>Disputed Invoices</p>
          </div>
        </div>
        <div className="w-[57%] center flex-col border border-[#F7F7F7] p-3">
          <div className="between w-full pb-3 border-b border-[#F7F7F7]">
            <div className="flex flex-col">
              <h3 className="font-bold text-md">Upcoming Deadline</h3>
              <p>You have 0 projects due today</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/svgs/Calendar.svg"
                  alt="calender"
                  width={25}
                  height={25}
                />
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
        Recent Activities
      </h3>
      <div className="w-[99%] border border-[#F7F7F7] center gap-3 py-8 flex-col">
        <div>
          <Image src="/svgs/Sparkle.svg" alt="sparkle" width={80} height={80} />
        </div>
        <div className="center flex-col">
          <h3 className="font-semibold text-[1.5rem]">No Activities yet</h3>
          <p className="text-[#5E5E5E]">
            Send invoice to your clients and get paid
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
