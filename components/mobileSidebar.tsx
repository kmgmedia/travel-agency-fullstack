import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import NavItems from "./NavItems";

// Dynamic import for Syncfusion component to avoid CommonJS issues
let SidebarComponent: any = null;

const MobileSidebar = () => {
  const sidebarRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Syncfusion component dynamically
    import("@syncfusion/ej2-react-navigations").then((pkg) => {
      SidebarComponent = pkg.SidebarComponent;
      setIsLoaded(true);
    });
  }, []);

  const toggleSidebar = () => {
    sidebarRef.current?.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      {/* Header with toggle button */}
      <header className="flex justify-between items-center p-4 md:hidden">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/icons/logo.svg" alt="logo" className="w-8 h-8" />
          <h1 className="text-lg font-bold">TourVisto</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="w-7 h-7" />
        </button>
      </header>

      {/* Sidebar */}
      {isLoaded && SidebarComponent ? (
        <SidebarComponent
          ref={sidebarRef}
          width="250px" // smaller width for mobile
          created={() => sidebarRef.current?.hide()}
          closeOnDocumentClick={true}
          showBackdrop={true}
          type="Over" // slides over the content
        >
          <NavItems handlesClick={toggleSidebar} />
        </SidebarComponent>
      ) : (
        // Fallback for when component is loading
        <div className="sidebar-fallback" style={{ display: "none" }}>
          <NavItems handlesClick={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
