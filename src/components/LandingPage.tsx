import TrustedBacked from "./TrustedBacked";
import MainCollection from "./MainCollection";
import Footer from "./Footer";
import "../app/globals.css";
import BlurCommunity from "./BlurCommunity";
import PopularCollections from "./PopularCollections";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-retroBg text-retroText font-retro">
      <MainCollection />
      <div className="flex flex-col items-center justify-center pt-10">
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

        <div className="border-t-4 border-retroHighlight w-full"></div>
      </div>
      <PopularCollections />
      <BlurCommunity />
      <TrustedBacked />
      <Footer />
    </div>
  );
}
