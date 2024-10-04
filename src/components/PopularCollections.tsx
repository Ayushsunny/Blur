export default function PopularCollections() {
  // Sample data for collections
  const collections = [
    {
      name: "Milady",
      owners: "5345",
      floorPrice: "3.21",
      volume: "38.26",
      image: "/assets/collection.jpg",
    },
    {
      name: "Opepen",
      owners: "3832",
      floorPrice: "0.11",
      volume: "15.75",
      image: "/assets/collection.jpg",
    },
    {
      name: "Pandas",
      owners: "3172",
      floorPrice: "0.45",
      volume: "4.94",
      image: "/assets/collection.jpg",
    },
    {
      name: "Pixelmon",
      owners: "1619",
      floorPrice: "0.44",
      volume: "7.66",
      image: "/assets/collection.jpg",
    },
    {
      name: "Rektguy",
      owners: "3336",
      floorPrice: "0.40",
      volume: "1.49",
      image: "/assets/collection.jpg",
    },
  ];

  return (
    <section className="bg-retroBg py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-retroHighlight text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Popular Collections
        </h2>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
          <div className="flex space-x-8">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="inline-block bg-black border border-gray-700 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 relative"
                style={{ width: "500px" }}
              >
                <div>
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex items-center justify-center text-white bg-gray-900 rounded-full pt-2 pb-4 h-8 w-8">
                    <span className="leading-none align-middle">&rarr;</span>
                  </div>
                </div>

                <div className="p-6 text-left text-gray-300 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-base mb-4">
                    {collection.name}
                  </h3>

                  <p className="text-sm mb-4">{collection.owners} owners</p>
                  <div className="h-20 flex-column justify-between items-start text-sm my-4">
                    <div className="my-2">
                      <p className="text-xs text-gray-400 my-1">FLOOR PRICE</p>
                      <p>{collection.floorPrice} Ξ</p>
                    </div>
                    <div className="my-2">
                      <p className="text-xs text-gray-400 my-1">1D VOLUME</p>
                      <p>{collection.volume} Ξ</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
