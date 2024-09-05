"use client";

// components/CollectionsList.tsx
import { useState } from "react";

// Define the type for the data structure
type CollectionItem = {
  project: string;
  floor_price: string;
  top_bid: string;
  "1d_change": string;
  "7d_change": string;
  "15m_volume": string;
  "1d_volume": string;
  "7d_volume": string;
  owners: string;
  supply: number;
};

// Define the props type for the component
interface CollectionsListProps {
  data: CollectionItem[];
}

const CollectionsList: React.FC<CollectionsListProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CollectionItem | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    // Parsing numeric values from strings if necessary, handling ETH values as strings
    const parseValue = (value: string | number) => {
      if (typeof value === "number") return value;
      return parseFloat(value.replace(/[^\d.-]/g, "")) || 0; // Remove non-numeric characters and parse as float
    };

    const aParsed = parseValue(aValue);
    const bParsed = parseValue(bValue);

    return sortConfig.direction === "asc"
      ? aParsed - bParsed
      : bParsed - aParsed;
  });

  const requestSort = (key: keyof CollectionItem) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getHeaderClass = (key: keyof CollectionItem) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "text-green-500" : "text-red-500";
    }
    return "";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border-b md:border-none block md:table-row">
            <th
              className="p-2 md:border md:border-grey-500 text-left block md:table-cell cursor-pointer"
              onClick={() => requestSort("project")}
            >
              Project <span className={getHeaderClass("project")}>▲▼</span>
            </th>
            <th
              className="p-2 md:border md:border-grey-500 text-left block md:table-cell cursor-pointer"
              onClick={() => requestSort("floor_price")}
            >
              Floor Price{" "}
              <span className={getHeaderClass("floor_price")}>▲▼</span>
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Top Bid
            </th>
            <th
              className="p-2 md:border md:border-grey-500 text-left block md:table-cell cursor-pointer"
              onClick={() => requestSort("1d_change")}
            >
              1D Change <span className={getHeaderClass("1d_change")}>▲▼</span>
            </th>
            <th
              className="p-2 md:border md:border-grey-500 text-left block md:table-cell cursor-pointer"
              onClick={() => requestSort("7d_change")}
            >
              7D Change <span className={getHeaderClass("7d_change")}>▲▼</span>
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Owners
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Supply
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {sortedData.map((item, index) => (
            <tr
              key={index}
              className="bg-black-200 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {item.project}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {item.floor_price}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {item.top_bid}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {item["1d_change"]}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {item["7d_change"]}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {item.owners}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {item.supply}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionsList;
