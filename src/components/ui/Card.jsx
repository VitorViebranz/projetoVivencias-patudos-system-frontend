function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 border border-amber-400">
      {children}
    </div>
  );
}

export default Card;