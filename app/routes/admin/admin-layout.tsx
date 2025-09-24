import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { NavItems } from "../../../components";
import { MobileSidebar } from "../../../components";

// Dynamic import for Syncfusion component to avoid CommonJS issues
let SidebarComponent: any = null;

const AdminLayout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Syncfusion component dynamically
    import("@syncfusion/ej2-react-navigations").then((pkg) => {
      SidebarComponent = pkg.SidebarComponent;
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="admin-layout">
      {/* Mobile Sidebar View */}
      <MobileSidebar />

      {/* Desktop Sidebar View */}
      <aside className="w-full max-w-[270px] hidden lg:block">
        {isLoaded && SidebarComponent ? (
          <SidebarComponent width={270} enableGestures={false}>
            <NavItems handlesClick={() => {}} />
          </SidebarComponent>
        ) : (
          // Fallback for when component is loading
          <div className="sidebar-fallback">
            <NavItems handlesClick={() => {}} />
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
