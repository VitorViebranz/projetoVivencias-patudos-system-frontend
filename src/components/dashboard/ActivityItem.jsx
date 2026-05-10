 function ActivityItem({ title, time }) {
  return (
    <div className="flex justify-between border-b border-amber-400 py-3">
      <p>{title}</p>
      <span className="text-gray-400 text-sm">{time}</span>
    </div>
  );
}

export default ActivityItem;