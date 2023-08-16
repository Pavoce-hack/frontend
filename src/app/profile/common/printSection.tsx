
import React, { ReactNode } from "react";

interface PrintSectionProps {
    children: ReactNode;
}

const PrintSection: React.FC<PrintSectionProps> = ({children}) => {
  return (
    <div className="w-full h-screen border border-DarkGray rounded-lg">
      {children}
    </div>
  );
};

export default PrintSection;
