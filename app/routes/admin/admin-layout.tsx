import { Outlet } from "react-router";
import pkg from "@syncfusion/ej2-react-navigations";
import { NavItems } from "../../../components";

const { SidebarComponent } = pkg;

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      MobileSidebar
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width="270px" enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
