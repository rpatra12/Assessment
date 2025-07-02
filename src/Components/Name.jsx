
function Name({ name }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="text-2xl md:text-4xl font-bold text-gray-800 bg-white px-8 py-6 rounded-xl shadow-lg border border-purple-200">
        Hello Matson, I am <span className="text-purple-600">{name}</span>
      </div>
    </div>
  );
}


export default Name;
