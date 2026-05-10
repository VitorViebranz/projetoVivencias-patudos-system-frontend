import { Bell, Search, Settings } from "lucide-react";

 
 
 function Header() {
  return (
    <div className="flex justify-between items-center mb-6">

      <input
        placeholder="Buscar por..."
        className="border px-4 py-2 rounded-xl w-1/3"
      />

      <div className="flex items-center gap-4">
        <span><Bell/></span>
        <span><Settings/></span>
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

export default Header;