
import React, { ReactNode } from "react";

interface PrintSectionProps {
    children: ReactNode;
}

const PrintSection: React.FC<PrintSectionProps> = ({children}) => {
  return (
    <div className="w-full min-h-screen border-[#dbd7d7] border   center flex-col">
      {children}
    </div>
  );
};

export default PrintSection;
