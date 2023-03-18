import React from "react";
import { IconType } from "react-icons";

interface Props {
  lable: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

function SidebarItem({ lable, href, icon: Icon, onClick }: Props) {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer transition lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative rounded-full hidden lg:flex items-center gap-4 p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{lable}</p>
      </div>
    </div>
  );
}

export default SidebarItem;
