import AnnoucementBar from "../elements/AnnoucementBar";
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
      <AnnoucementBar />

      <nav className="bg-[#FFFFFF] flex justify-between items-center py-5 px-10">
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
