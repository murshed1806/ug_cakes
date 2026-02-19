import React from "react";
import { navigateLinks } from "@/data/data";
import NavItem from "./NavItem";

const NavigateContent = () => {
  return (
    <div className="w-full py-2 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Horizontal View (1024px+) */}
        <div className="hidden lg:flex items-center justify-center gap-2">
          {navigateLinks.map((item) => (
            <div key={item.id}>
              <NavItem item={item} />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Vertical List View (< 1024px) */}
        <div className="lg:hidden">
          <nav className="flex flex-col space-y-1 max-w-md mx-auto">
            {navigateLinks.map((item) => (
              <NavItem key={item.id} item={item} isMobile={true} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigateContent;
