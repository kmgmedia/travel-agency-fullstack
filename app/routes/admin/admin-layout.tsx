import { Outlet } from "react-router";
import pkg from "@syncfusion/ej2-react-navigations";
import { NavItems } from "../../../components";
import { MobileSidebar } from "../../../components";

const { SidebarComponent } = pkg;

const AdminLayout = () => {
  return (
    <div className="admin-layout">

      {/* Mobile Sidebar View */}
      <MobileSidebar />

      {/* Desktop Sidebar View */}
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      {/* Main Content Area */}
      <aside className="children">
        <Outlet />
      </aside>

    </div>
  );
};

export default AdminLayout;
