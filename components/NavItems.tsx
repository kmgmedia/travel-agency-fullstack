import { Link } from "react-router";
import { sidebarItems } from "~/constants";


const NavItems = () => {
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo"
        className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>
      <div className="container">
        <nav>
            {sidebarItems.map(({ id, href, icon, label }) => (
                <div key={id}>
                    <Link to={href} className="nav-item">
                        {icon && <img src={icon} alt={label} className="nav-icon" />}
                        <span>{label}</span>
                    </Link>
                </div>
            ))}
        </nav>
      </div>
    </section>
  );
};

export default NavItems;
