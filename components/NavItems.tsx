import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({ handlesClick }: { handlesClick: () => void }) => {
  const user = {
    name: "Moruf Adebola",
    email: "hellokmgmedia@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="nav-items flex flex-col h-screen p-4 bg-white">
      {/* Logo (hidden on mobile) */}
      <Link to="/" className="hidden md:flex items-center gap-2 mb-4">
        <img src="/assets/icons/logo.svg" alt="logo" className="w-8 h-8" />
        <h1 className="text-lg font-bold">Tourvisto</h1>
      </Link>

      {/* Nav + Footer container */}
      <div className="flex flex-col justify-between flex-1">
        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink
              to={href}
              key={id}
              className={({ isActive }) =>
                cn(
                  "group nav-item flex items-center gap-2 px-3 py-2 rounded-md transition",
                  isActive
                    ? "bg-primary-100 !text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )
              }
              onClick={handlesClick}
            >
              {({ isActive }) => (
                <>
                  <img
                    src={icon}
                    alt={label}
                    className={cn(
                      "w-5 h-5 transition group-hover:brightness-0 group-hover:invert",
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    )}
                  />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer pinned to bottom */}
        <footer className="mt-4 flex items-center gap-2">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "David"}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{user?.name}</span>
            <span className="text-xs text-gray-500">{user?.email}</span>
          </div>

          <button
            onClick={() => {
              console.log("message: Logout");
            }}
            className="cursor-pointer ml-auto"
          >
            <img
              src="/assets/icons/logout.svg"
              alt="Logout"
              className="w-6 h-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
