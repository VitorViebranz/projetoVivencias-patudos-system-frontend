function FilterTabs() {
  const tabs = ["Todos", "Raças", "Machos", "Fêmeas"];

  return (
    <div className="flex gap-2 my-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="px-3 py-1 border rounded-full text-sm"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;