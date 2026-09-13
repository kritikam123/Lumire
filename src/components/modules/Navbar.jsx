import AnnoucementBar from "../elements/AnnouncementBar";
import NavbarLink from "../elements/NavbarLink";
import Logo from "../elements/Logo";
import NavbarIcons from "../elements/NavbarIcons";

const navItems = [
  { title: "Jewelry", path: "/jewelry" },
  { title: "Trending", path: "/trending" },
  { title: "Gifts", path: "/gifts" },
];

const Navbar = () => {
  return (
    <div>

      <nav className="bg-[#FFFFFF] flex justify-between items-center py-2 px-10">
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavbarLink key={item.title} to={item.path}>
              {item.title}
            </NavbarLink>
          ))}
        </div>

        <Logo size="xl" />

        <NavbarIcons />
      </nav>
    </div>
  );
};

export default Navbar;
