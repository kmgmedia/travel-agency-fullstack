import { Outlet } from "react-router";
import pkg from "@syncfusion/ej2-react-navigations";
import { NavItems } from "../../../components";

const { SidebarComponent } = pkg;

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
