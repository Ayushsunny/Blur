// components/RetroComponent.js
export default function RetroComponent() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center p-4 retro-bg">
      {/* Retro title */}
      <div className="window border border-gray-400 bg-gray-100 p-2 w-800">
        <div className="window-header bg-gray-400 text-black px-2 py-1 flex center">
          <span>TRUSTED AND BACKED BY</span>
        </div>
        <div className="window-body bg-gray-100 p-2 text-center">
          <p className="text-sm font-bold mb-2">Happy Holidays!</p>
          <p className="text-xs">
            The elves (i.e., our developers) have hidden 10 Christmas trees.
            Find as many as you can, and we will plant them IRL.
          </p>
        </div>
      </div>

      {/* Retro Footer */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-gray-300 border border-gray-500 px-4 py-2 text-black text-xs">
          Send Wishes
        </button>
        <button className="bg-gray-300 border border-gray-500 px-4 py-2 text-black text-xs">
          Guestbook
        </button>
      </div>
    </div>
  );
}
