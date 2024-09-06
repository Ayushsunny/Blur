"use client";
import { useState } from "react";

// Define the type for the data structure
type CollectionItem = {
  project: string;
  floor_price: string;
  top_bid: string;
  "1d_change": string;
  "7d_change": string;
  owners: string;
  supply: number;
};

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

    const parseValue = (value: string | number) => {
      if (typeof value === "number") return value;
      return parseFloat(value.replace(/[^\d.-]/g, "")) || 0;
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
    return "text-gray-400";
  };

  return (
    <div className="w-full h-full overflow-auto bg-[#0d0d0d]">
      <table className="w-full h-full table-fixed bg-[#0d0d0d] text-white text-sm font-medium">
        <thead className="bg-[#0d0d0d] text-gray-400 sticky top-0">
          <tr className="bg-[#1a1a1a]">
            <th
              className="p-4 cursor-pointer font-normal w-1/6 text-left"
              onClick={() => requestSort("project")}
            >
              <div className="flex items-center">
                Project
                <span className={`ml-2 ${getHeaderClass("project")}`}>
                  {sortConfig.key === "project"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : "▲▼"}
                </span>
              </div>
            </th>
            <th
              className="p-4 cursor-pointer font-normal w-1/6 text-left"
              onClick={() => requestSort("floor_price")}
            >
              <div className="flex items-center">
                Floor Price
                <span className={`ml-2 ${getHeaderClass("floor_price")}`}>
                  {sortConfig.key === "floor_price"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : "▲▼"}
                </span>
              </div>
            </th>
            <th className="p-4 font-normal w-1/6 text-left">Top Bid</th>
            <th
              className="p-4 cursor-pointer font-normal w-1/6 text-left"
              onClick={() => requestSort("1d_change")}
            >
              <div className="flex items-center">
                1D Change
                <span className={`ml-2 ${getHeaderClass("1d_change")}`}>
                  {sortConfig.key === "1d_change"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : "▲▼"}
                </span>
              </div>
            </th>
            <th
              className="p-4 cursor-pointer font-normal w-1/6 text-left"
              onClick={() => requestSort("7d_change")}
            >
              <div className="flex items-center">
                7D Change
                <span className={`ml-2 ${getHeaderClass("7d_change")}`}>
                  {sortConfig.key === "7d_change"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : "▲▼"}
                </span>
              </div>
            </th>
            <th className="p-4 font-normal w-1/6 text-left">Owners</th>
            <th className="p-4 font-normal w-1/6 text-left">Supply</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr
              key={index}
              className="bg-[#1a1a1a] hover:bg-[#262626] transition duration-150"
            >
              <td className="p-4 text-left">{item.project}</td>
              <td className="p-4 text-left">{item.floor_price} ETH</td>
              <td className="p-4 text-left">{item.top_bid} ETH</td>
              <td className="p-4 text-left">{item["1d_change"]}%</td>
              <td className="p-4 text-left">{item["7d_change"]}%</td>
              <td className="p-4 text-left">{item.owners}</td>
              <td className="p-4 text-left">{item.supply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionsList;
