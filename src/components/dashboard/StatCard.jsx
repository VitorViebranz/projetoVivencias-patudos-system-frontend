import Card from "../ui/Card";

function StatCard({ title, value, subtitle, icon: Icon, color = "blue" }) {

  const colorStyles = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600"
  };

  return (
    <Card>
      <div className="flex items-center justify-between">

        {/* TEXTO */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-2xl font-bold leading-none">{value}</h2>
          {/* {subtitle && (
            <p className="text-sm text-green-500">{subtitle}</p>
          )} */}
        </div>

        {/* ÍCONE */}
        <div className={`p-3 rounded-xl ${colorStyles[color]}`}>
          {Icon && <Icon size={20} />}
        </div>

      </div>
    </Card>
  );
}

export default StatCard;