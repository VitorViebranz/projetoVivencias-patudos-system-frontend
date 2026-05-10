function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-xl font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;