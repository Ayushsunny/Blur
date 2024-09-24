export default function BlurCommunity() {
  return (
    <section className="relative bg-black text-retroText py-16 overflow-hidden">
      <div className="absolute inset-0 grid-lines z-0"></div>

      <div className="container mx-auto text-center z-10 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-retroHighlight neon-glow mb-6">
          $BLUR FOR THE COMMUNITY
        </h2>

        <p className="text-sm sm:text-base md:text-lg mb-8">
          700M BLUR was distributed to the community across Season 1 and 2.
          Season 3 has now begun, powered by Blast, the L2 with native yield
          backed by Paradigm and Standard Crypto.
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-8">
          Start listing and bidding on Blur to get started on Season 3 rewards.
        </p>

        <button className="bg-retroHighlight text-black font-bold py-2 px-6 rounded-full neon-button hover:bg-orange-400 transition-all">
          VIEW SEASON 3
        </button>
      </div>

      <div className="absolute bottom-0 w-full z-0">
        {/* <img
          src="/path-to-coins-image.png"
          alt="Blur Coins"
          className="w-full h-auto"
        /> */}
      </div>
    </section>
  );
}
