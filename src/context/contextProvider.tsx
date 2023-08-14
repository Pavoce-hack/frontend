'use client'

import React, { createContext, useContext, useState, ReactNode, SetStateAction } from 'react';

interface InvoiceInfo {
    businessName: string;
    businessEmail: string;
    businessPhoto: string;
    clientName: string;
    clientEmail: string;
    startDate: string;
    endDate: string;
    serviceTitle: string;
    serviceDescription: string;
    serviceQty: number;
    serviceRate: number;
    bankName: string;
    accountNumber: number;
    installment: number;
    initialDeposit: number;
    tax: number;
    discount: number;
    terms: string;
}

interface InvoiceContextType {
    InvoiceInfo: InvoiceInfo | null;
    setInvoiceInfo: React.Dispatch<SetStateAction<InvoiceInfo | null>>;
}

const initialInvoiceInfo: InvoiceInfo = {
    businessName: "",
    businessEmail: "",
    businessPhoto: "",
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
};

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

interface InvoiceProviderProps {
    children: ReactNode;
}

export const InvoiceProvider: React.FC<InvoiceProviderProps> = ({ children }) => {
    const [InvoiceInfo, setInvoiceInfo] = useState<InvoiceInfo | null>(initialInvoiceInfo);

    return (
        <InvoiceContext.Provider value={{ InvoiceInfo, setInvoiceInfo }}>
            {children}
        </InvoiceContext.Provider>
    );
};

export const useInvoiceContext = (): InvoiceContextType => {
    const context = useContext(InvoiceContext);
    if (!context) {
        throw new Error('useContext must be used within an InvoiceProvider');
    }
    return context;
};
