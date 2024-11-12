import NavLogo from "../../assets/images/Nav-mainlogo.svg";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import { NavLink } from "react-router-dom";
import ShipmentIcon from "../../assets/icons/ShipmentIcon";
import InventoryIcon from "../../assets/icons/InventoryIcon";
import OrdersIcon from "../../assets/icons/OrdersIcons";
import CustomersIcon from "../../assets/icons/CustomersIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";

const Sidebar = () => {
  return (
    <div className="bg-white-900 text-black h-screen p-6 space-y-5 w-[276px] sm:w-[64px] md:w-[276px] lg-w-[276px] fixed left-0 top-0 z-10">
      <div className="frame112">
        <img
          src={NavLogo}
          alt="Logo"
          width={200}
          height={100}
          className="mb-20"
        />
        <nav className="space-y-2 w-[212px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[224px] rounded-md"
                : "flex items-center block text-black px-2 py-3  w-[224px] hover:bg-custom-hover rounded-md"
            }
          >
            <DashboardIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm">Dashboard</span>
          </NavLink>
          <NavLink
            to="/shipment"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 rounded-md w-[224px]"
                : "flex items-center block text-black py-3 px-2 hover:bg-custom-hover rounded-md w-[224px]"
            }
          >
            <ShipmentIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm">Shipment</span>
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 rounded-md  w-[224px]"
                : "flex items-center block text-black px-2 py-3 hover:bg-custom-hover rounded-md  w-[224px]"
            }
          >
            <InventoryIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm">Inventory</span>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 rounded-md w-[224px]"
                : "flex items-center block text-black px-2 py-3 hover:bg-custom-hover rounded-md w-[224px]"
            }
          >
            <OrdersIcon className="w-6 h-6" style={{ fill: "currentColor" }} />
            <span className="ml-5 font-normal text-sm">Orders</span>
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 rounded-md w-[224px]"
                : "flex items-center block text-black px-2 py-3 hover:bg-custom-hover rounded-md w-[224px]"
            }
          >
            <CustomersIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm">Customers</span>
          </NavLink>
          <div className="flex flex-col">
            <div className="mt-12">
              <hr className="border-t border-gray-300" />
            </div>
          </div>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 rounded-md w-[224px]"
                : "flex items-center block text-black px-2 py-3 hover:bg-custom-hover rounded-md w-[224px]"
            }
          >
            <SupportIcon className="w-6 h-6" style={{ fill: "currentColor" }} />
            <span className="ml-5 font-normal text-sm">Help and Support</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 rounded-md w-[224px]"
                : "flex items-center block text-black px-2 py-3 hover:bg-custom-hover rounded-md w-[224px]"
            }
          >
            <SettingsIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm">Settings</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
