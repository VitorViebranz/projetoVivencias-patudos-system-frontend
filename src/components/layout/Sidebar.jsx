import { NavLink } from "react-router-dom";
import { LayoutDashboard, PawPrint, Package, DollarSign, Users } from "lucide-react";

function Sidebar() {
  const baseClass =
    "flex items-center gap-3 p-2 rounded-lg transition-colors";

  const activeClass = "text-yellow-500 font-semibold bg-yellow-50";
  const inactiveClass = "text-gray-600 hover:bg-gray-100";

  return (
    <div className="w-64 h-screen sticky top-0 border-r p-4 flex flex-col justify-between bg-white">
      <div>
        <h1 className="font-bold text-lg">Patudos da Rua</h1>

        <nav className="mt-6 flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/animals"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <PawPrint size={20} />
            <span>Animais</span>
          </NavLink>

          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <Package size={20} />
            <span>Estoque</span>
          </NavLink>

          <NavLink
            to="/finance"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <DollarSign size={20} />
            <span>Financeiro</span>
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <Users size={20} />
            <span>Administração</span>
          </NavLink>
        </nav>
      </div>

      <div className="text-sm border-t pt-4">
        <p className="font-semibold">Admin</p>
        <p className="text-gray-400">Cargo</p>
      </div>
    </div>
  );
}

export default Sidebar;