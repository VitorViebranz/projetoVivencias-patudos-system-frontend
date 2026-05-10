function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
        {...props}
      />
    </div>
  );
}

export default Input;