const profiles = [
  { name: "PARADIGM", image: "/assets/profile.jpg" },
  { name: "6529", image: "/assets/profile.jpg" },
  { name: "KEYBOARD MONKEY", image: "/assets/profile.jpg" },
  { name: "ZENECA", image: "/assets/profile.jpg" },
  { name: "EGIRL CAPITAL", image: "/assets/profile.jpg" },
  { name: "DEEZE", image: "/assets/profile.jpg" },
  { name: "COZOMO", image: "/assets/profile.jpg" },
  { name: "DHOF", image: "/assets/profile.jpg" },
];

export default function TrustedBacked() {
  return (
    <div className="bg-retroBg text-retroText font-retro pt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-retroHighlight tracking-wider uppercase">
            Trusted and Backed By
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 text-center mb-10">
          {profiles.map((profile, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-retroHighlight rounded-full p-4 w-24 h-24 flex items-center justify-center mb-2">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-bold break-words">{profile.name}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-4 border-retroHighlight w-full mb-8"></div>
      </div>
    </div>
  );
}
