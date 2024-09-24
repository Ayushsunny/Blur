import CollectionsList from "../components/CollectionsList";
import sampleData from "./data/sampleCollectionsData.json";

export default function Home() {
  return (
    <div className="flex items-center overflow-hidden justify-center h-screen bg-gray-700">
      <CollectionsList data={sampleData} />
    </div>
  );
}
