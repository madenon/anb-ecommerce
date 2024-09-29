import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[18%]  min-h-screen border-r-2 bg-slate-400 shadow-sm ">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px] ">
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/add">
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block font-semibold">Ajouter un artcile</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/list">
          <img className="w-5 h-5" src={assets.list_icon} alt="" />
          <p className="hidden md:block font-semibold">Liste des artciles</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/orders">
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block font-semibold">Les commandes</p>
        </NavLink>

       
      </div>
    </div>
  );
};

export default Sidebar;
