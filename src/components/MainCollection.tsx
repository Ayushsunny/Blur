export default function MainCollection() {
  const collections = [
    {
      name: "Pudgy Penguins",
      owners: "5345",
      floorPrice: "10.69",
      volume: "204.21",
      image: "/assets/collection.jpg",
    },
    {
      name: "Kanpai Pandas",
      owners: "3832",
      floorPrice: "0.11",
      volume: "15.75",
      image: "/assets/collection.jpg",
    },
    {
      name: "Bored Ape Yacht Club",
      owners: "3172",
      floorPrice: "0.45",
      volume: "4.94",
      image: "/assets/collection.jpg",
    },
    {
      name: "Checks - VV Originals",
      owners: "1619",
      floorPrice: "0.44",
      volume: "7.66",
      image: "/assets/collection.jpg",
    },
    {
      name: "Azuki",
      owners: "3336",
      floorPrice: "0.40",
      volume: "1.49",
      image: "/assets/collection.jpg",
    },
  ];

  return (
    <section className="bg-retroBg py-16">
      <div className="container mx-auto text-center relative">
        <div className="relative">
          <img
            src="/assets/collection.jpg"
            alt="Pudgy Penguins"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex flex-col justify-evenly px-10 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              Pudgy Penguins
            </h2>
            <p className="text-lg">BY PUDGY PENGUINS</p>

            <div className="flex space-x-8 mt-4">
              <div>
                <p className="text-gray-400 text-sm">FLOOR PRICE</p>
                <p className="text-2xl font-bold">10.69 Ξ</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">1D VOLUME</p>
                <p className="text-2xl font-bold">204.21 Ξ</p>
              </div>
            </div>

            <div className="mt-4">
              <button className="bg-white text-black px-6 py-2 font-bold rounded-full flex items-center">
                VIEW COLLECTION
                <span className="ml-2 leading-none pb-2">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide px-4 mt-8">
        <div className="flex space-x-4 justify-center">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="inline-block bg-black border border-gray-700 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 relative"
              style={{ width: "300px" }}
            >
              <div>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-40 object-cover"
                />
              </div>

              <div className="p-4 text-left text-gray-300 bg-black bg-opacity-70">
                <h3 className="text-white font-bold text-sm mb-2">
                  {collection.name}
                </h3>
                <p className="text-xs mb-2">{collection.owners} owners</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
