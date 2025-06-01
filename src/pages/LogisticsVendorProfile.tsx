
import React from "react";
import { LogisticsVendorHeader } from "@/components/vendor/LogisticsVendorHeader";
import { LogisticsVendorSidebar } from "@/components/vendor/LogisticsVendorSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const LogisticsVendorProfile = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <LogisticsVendorHeader />
      <div className="flex-1 flex">
        <SidebarProvider>
          <div className="flex min-h-[calc(100vh-4rem)] w-full">
            <LogisticsVendorSidebar />
            <main className="flex-1 p-6 bg-gray-50">
              {/* Content will be rendered by the sidebar navigation */}
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default LogisticsVendorProfile;
