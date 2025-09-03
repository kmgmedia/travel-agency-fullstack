import React, { useRef } from "react";
import { Link } from "react-router";
import SfNavPkg from "@syncfusion/ej2-react-navigations";
import NavItems from "./NavItems";

const { SidebarComponent } = SfNavPkg;

const MobileSidebar = () => {
  const sidebarRef = useRef<InstanceType<typeof SidebarComponent> | null>(null);

  const toggleSidebar = () => {
    sidebarRef.current?.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header className="flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/icons/logo.svg" alt="logo" className="w-8 h-8" />
          <h1 className="text-lg font-bold">TourVisto</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="w-7 h-7" />
        </button>
      </header>

      <SidebarComponent
        ref={sidebarRef}
        width={270}
        created={() => sidebarRef.current?.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="Over"
      >
        <NavItems handlesClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
