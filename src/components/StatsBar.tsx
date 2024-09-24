import "../app/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-retroBg text-retroText font-retro">
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-retroHighlight tracking-wider">
            THE FASTEST NFT MARKETPLACE
          </h1>
          <p className="mt-2 text-lg">
            Ditch slow. Execute trades faster and make more money on Blur.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 text-center mb-10">
          <div className="flex flex-col items-center">
            <span className="text-5xl text-retroHighlight">10x</span>
            <p>Faster Sweeping</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl text-retroHighlight">0%</span>
            <p>Marketplace Fees</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl text-retroHighlight">$7.4B</span>
            <p>Total GMV</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl text-retroHighlight">324,966</span>
            <p>Total Users</p>
          </div>
        </div>

        <div className="border-t-4 border-retroHighlight w-full mb-8"></div>

        <div className="bg-retroHighlight px-8 py-3 rounded-lg cursor-pointer text-white">
          Let's start trading!
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full py-4 flex justify-between px-8 bg-retroBg border-t-2 border-retroHighlight">
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-retroHighlight text-white px-4 py-2 rounded-md">
            Guest book
          </button>
          <button className="flex items-center bg-retroHighlight text-white px-4 py-2 rounded-md">
            Send wishes
          </button>
        </div>
      </footer>
    </div>
  );
}
