'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InvoiceInfo {
    businessName: string;
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
    setInvoiceInfo: React.Dispatch<React.SetStateAction<InvoiceInfo | null>>;
}
export const AccountContext = createContext(null)
const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

interface InvoiceProviderProps {
    children: ReactNode;
}

export const InvoiceProvider: React.FC<InvoiceProviderProps> = ({ children }) => {
    const [InvoiceInfo, setInvoiceInfo] = useState<InvoiceInfo | null>(null);

    return (
        <InvoiceContext.Provider value={{ InvoiceInfo, setInvoiceInfo }}>
            {children}
        </InvoiceContext.Provider>
    );
};

export const useInvoiceContext = (): InvoiceContextType => {
    const context = useContext(InvoiceContext);
    if (!context) {
        throw new Error('useContext must be used within a InvoiceProvider');
    }
    return context;
};