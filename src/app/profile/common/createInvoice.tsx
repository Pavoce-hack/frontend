"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useInvoiceContext } from "@/context/contextProvider";
import { useAccount } from "wagmi";
import PrintSection from "./printSection";
import { InvoiceDocument, InvoiceStatus } from "@/utils/invoice";
import axios from "axios";
export const cookie = document.cookie.slice(7);

const CreateInvoice: React.FC = () => {
  const { InvoiceInfo } = useInvoiceContext();
  const { address } = useAccount();
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [duration, setDuration] = useState(0);
  const [serviceTitle, setServiceTitle] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("0");
  const [rate, setRate] = useState<string>("0.00");
  const [amount, setAmount] = useState<number>(0.0);
  const [description, setDescription] = useState<string>("");
  const [payment, setPayment] = useState<string>("");
  const [deposit, setDeposit] = useState<string>("");
  const [depositTotal, setDepositTotal] = useState<string>("0.00");
  const [discount, setDiscount] = useState<string>("0");
  const [total, setTotal] = useState<string>("0.00");
  const [terms, setTerms] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const invoiceDetails: InvoiceDocument = {
    amount: amount,
    clientEmail: clientEmail,
    clientName: clientName,
    duration: duration,
    endDate: endDate,
    invoiceAddress: String(address),
    paymentType: "Crypto",
    services: [
      {
        rate: Number(rate),
        quantity: Number(quantity),
        title: serviceTitle,
        description: description,
      },
    ],
    status: InvoiceStatus.PENDING,
    startDate: startDate,
    userId: "",
    currency: "XRP",
    installment: Number(payment),
    initialDeposit: Number(deposit),
    discount: Number(deposit),
    termsAndConditions: terms.split("\n"),
  };

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      // Calculate the time difference in milliseconds
      const timeDifference = Number(end) - Number(start);
      // Convert milliseconds to days
      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      setDuration(Number(daysDifference));
      return;
    }
    setDuration(0);
  }, [startDate, endDate]);

  useEffect(() => {
    if (rate && quantity) {
      const calculatedAmount = Number(rate) * Number(quantity);
      setAmount(Number(calculatedAmount.toFixed(0))); // Adjust to the desired decimal places
    }
  }, [rate, quantity]);

  useEffect(() => {
    if (deposit && amount) {
      const calculatedDeposit = (parseFloat(deposit) / 100) * amount;
      setDepositTotal(calculatedDeposit.toFixed(0)); // Adjust to the desired decimal places
    }
  }, [deposit, amount]);

  useEffect(() => {
    if (deposit && amount) {
      const calculatedDeposit = (parseFloat(deposit) / 100) * amount;
      setDepositTotal(calculatedDeposit.toFixed(0)); // Adjust to the desired decimal places
    }
  }, [deposit, amount]);

  useEffect(() => {
    if (amount) {
      let calculatedTotal = amount;

      if (discount) {
        const calculatedDiscount = (parseFloat(discount) / 100) * amount;
        calculatedTotal -= calculatedDiscount;
      }

      setTotal(calculatedTotal.toFixed(0)); // Rounding to 0 decimal places
    }
  }, [amount, discount]);

  const handlePrint = async () => {
    const createdInvoice = await createInvoice();
    if (createdInvoice.status === 201) {
      const printContent = document.getElementById("print-section")?.innerHTML;
      if (printContent) {
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
      }
    }
  };

  const config = {
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-Type": "application/json",
    },
  };

  const createInvoice = async () => {
    const invoiceResponse = await axios.post(
      "http://localhost:4000/invoice/create",
      invoiceDetails,
      config
    );
    return invoiceResponse;
  };

  return (
    <div className="w-full center flex-col gap-6">
      <h2 className="font-bold text-lg text-left w-full ml-10 ">
        Create Invoice
      </h2>
      <div className="flex justify-between w-full text-[.85rem]">
        <div className="w-[40%] p-8 flex flex-col gap-4">
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
              className="border outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
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
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="start-date"
              placeholder="Enter duration"
              id="startDate"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="end-date"
              placeholder="Enter duration"
              id="endDate"
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="duration">Duration: (in days)</label>
            <input
              type="number"
              name="duration"
              placeholder="Enter duration"
              id="duration"
              readOnly
              required
              value={duration}
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="serviceTitle">Service Title</label>
            <input
              type="text"
              name="serviceTitle"
              placeholder="Enter service title"
              id="serviceTitle"
              value={serviceTitle}
              onChange={(e) => setServiceTitle(e.target.value)}
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="serviceDesc">Service Description</label>
            <input
              type="text"
              name="serviceDesc"
              placeholder="Enter service description"
              id="serviceDesc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Qty">Qty</label>
            <input
              type="number"
              name="Qty"
              placeholder="0"
              id="Qty"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Rate">Rate</label>
            <input
              type="number"
              name="Rate"
              placeholder="100"
              id="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="border  outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="installment">Installment</label>
            <input
              type="number"
              placeholder="2"
              name="installment"
              id="installment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="border outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="initialDeposit">Initial Deposit %</label>
            <input
              type="number"
              placeholder="100%"
              name="initialDeposit"
              id="initialDeposit"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className="border outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="discount">Discount %</label>
            <input
              type="number"
              placeholder="10%"
              name="discount"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="border outline-none border-DarkGray px-5 py-3 text-black   bg-[#F7F7F7]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="terms">Terms and Conditions</label>
            <textarea
              name="terms"
              id="terms"
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              className="border outline-none border-DarkGray px-5 py-3   bg-[#F7F7F7]"
              placeholder="Less than 250 characters."
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col w-[60%]">
          <PrintSection>
            <div className="w-full h-full   p-3" id="print-section">
              {InvoiceInfo && (
                <div className="w-full between">
                  <div>
                    <h3 className="font-bold text-md">
                      {InvoiceInfo.businessName}
                    </h3>
                    <p className="text-sm">{InvoiceInfo.businessEmail}</p>
                  </div>
                  <div className="">
                    <Image
                      src="/icons/logo.png"
                      alt="business photo"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              )}
              <div className="center mt-16">
                <div className="w-[60%] flex flex-col min-h-[160px]">
                  <h5 className="font-semibold text-md mb-3">BILL TO</h5>
                  <p className="w-full break-all font-semibold text-[.9rem]">
                    {clientName}
                  </p>
                  <p className="w-full break-all">{clientEmail}</p>
                </div>
                <div className="w-[40%] flex flex-col min-h-[100px]">
                  <p className="font-semibold">Wallet address:</p>
                  <p className="text-[0.9rem] w-full break-all">{address}</p>
                  <p className="font-semibold mt-4">Currency:</p>
                  <p className="text-[0.9rem] w-full break-all">XRP</p>
                  <p className="font-semibold mt-4">
                    Duration: {`${duration} day${duration > 1 ? "s" : ""}`}
                  </p>
                </div>
              </div>
              <div className="bg-DarkGray p-2 font-semibold mb-3 text-[1rem] mt-6 between">
                <div className="w-[60%]">Services</div>
                <div className="w-[40%] between">
                  <div>Qty</div>
                  <div>Rate</div>
                  <div>Amount</div>
                </div>
              </div>
              <div className="mt-6 between">
                <div className="w-[60%] flex-col flex">
                  <p className="text-[.9rem] font-semibold">{serviceTitle}</p>
                  <p>{description}</p>
                </div>
                <div className="w-[40%] between">
                  <div>{quantity}</div>
                  <div>{rate}</div>
                  <div>XRP {amount}</div>
                </div>
              </div>
              <div className="mt-10 between">
                <div className="flex flex-col">
                  <p>Payment: {payment} installation(s)</p>
                  <p>
                    Initial deposit {deposit}%: XRP {depositTotal}{" "}
                  </p>
                </div>
                <div className="flex flex-col w-[40%]">
                  <div>
                    <div className="between w-full">
                      <p>Sub Total: </p>
                      <p>{amount}</p>
                    </div>
                    <div className="between w-full">
                      <p>Discount: </p>
                      <p>{amount * (Number(discount) / 100)}</p>
                    </div>
                  </div>
                  <div className="between w-full mt-3 border-t pt-3">
                    <p>Total:</p>
                    <p>{total}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[60%]">
                <p className="font-bold">Terms and Condition:</p>
                <p className="break-all">{terms}</p>
              </div>
            </div>
          </PrintSection>
          <div className="flex justify-center mt-6">
            <button
              onClick={handlePrint}
              className="bg-blue text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Print and save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
