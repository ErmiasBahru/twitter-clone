import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
const Sidebar = () => {
  const items = [
    {
      lable: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      lable: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      lable: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              lable={item.lable}
              icon={item.icon}
            />
          ))}
          <SidebarItem icon={BiLogOut} lable="Logout" onClick={() => {}} />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
