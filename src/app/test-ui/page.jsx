export default function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Tailwind Test</h1>
        <p className="text-lg text-gray-700">
          If you see a red background, white card, and blue text, Tailwind is working.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Hover Me
        </button>
      </div>
    </div>
  );
}
