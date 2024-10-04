"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

import profileImage from '@/assets/profile/profile.jpg';


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

interface CollectionsListProps {
  data: CollectionItem[];
}

const CollectionsList: React.FC<CollectionsListProps> = ({ data }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when the component is unmounted
    };
  }, []);


  const [sortConfig, setSortConfig] = useState<{
    key: keyof CollectionItem | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  // Handle sorting
  const sortedData = useMemo(() => {
    if (sortConfig.key === null) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof CollectionItem];
      const bValue = b[sortConfig.key as keyof CollectionItem];

      const parseValue = (value: string | number) =>
        typeof value === "number"
          ? value
          : parseFloat(value.replace(/[^\d.-]/g, "")) || 0;

      const aParsed = parseValue(aValue);
      const bParsed = parseValue(bValue);

      return sortConfig.direction === "asc" ? aParsed - bParsed : bParsed - aParsed;
    });
  }, [data, sortConfig]);

  const requestSort = (key: keyof CollectionItem) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getHeaderClass = (key: keyof CollectionItem) =>
    sortConfig.key === key
      ? sortConfig.direction === "asc"
        ? "text-green-500"
        : "text-red-500"
      : "text-gray-400";

  return (
    <div className="w-full flex flex-col bg-black">
      <div className="overflow-y-auto" style={{ maxHeight: "100vh" }}>
        <table className="w-full table-auto bg-black text-white text-sm font-medium">
          <thead className="sticky top-0 bg-black z-5">
            <tr className="text-left text-gray-400">
              <th
                className="p-3 cursor-pointer font-normal w-1/4 bg-black"
                onClick={() => requestSort("project")}
              >
                <div className="flex items-center ml-7">
                  Profile
                  <span className={`ml-2 ${getHeaderClass("project")}`}>
                    {sortConfig.key === "project" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </span>
                </div>
              </th>
              <th
                className="p-3 cursor-pointer font-normal text-center"
                onClick={() => requestSort("floor_price")}
              >
                <div className="flex items-center justify-center">
                  Floor Price
                  <span className={`ml-2 ${getHeaderClass("floor_price")}`}>
                    {sortConfig.key === "floor_price" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </span>
                </div>
              </th>
              <th className="p-3 font-normal text-center">Top Bid</th>
              <th
                className="p-3 cursor-pointer font-normal text-center"
                onClick={() => requestSort("1d_change")}
              >
                <div className="flex items-center justify-center">
                  1D Change
                  <span className={`ml-2 ${getHeaderClass("1d_change")}`}>
                    {sortConfig.key === "1d_change" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </span>
                </div>
              </th>
              <th
                className="p-3 cursor-pointer font-normal text-center"
                onClick={() => requestSort("7d_change")}
              >
                <div className="flex items-center justify-center">
                  7D Change
                  <span className={`ml-2 ${getHeaderClass("7d_change")}`}>
                    {sortConfig.key === "7d_change" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </span>
                </div>
              </th>
              <th className="p-3 font-normal text-center">15m Volume</th>
              <th className="p-3 font-normal text-center">1d Volume</th>
              <th className="p-3 font-normal text-center">7d Volume</th>
              <th className="p-3 font-normal text-center">Owners</th>
              <th className="p-3 font-normal text-center">Supply</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={index}
                className="bg-[#1a1a1a] hover:bg-[#262626] transition duration-150"
              >
                <td className="p-3 pl-8 flex items-center">
                  <Image
                    src={profileImage}
                    alt={`${item.project} profile`}
                    width={36}
                    height={36}
                    className="rounded-full mr-4"
                  />
                  <span>{item.project}</span>
                </td>
                <td className="p-3 text-center">{item.floor_price} ETH</td>
                <td className="p-3 text-center">{item.top_bid === "-" ? "-" : `${item.top_bid} ETH`}</td>
                <td
                  className={`p-3 text-center ${parseFloat(item["1d_change"]) >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {item["1d_change"]}%
                </td>
                <td
                  className={`p-3 text-center ${parseFloat(item["7d_change"]) >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {item["7d_change"]}%
                </td>
                <td className="p-3 text-center">{item["15m_volume"]}</td>
                <td className="p-3 text-center">{item["1d_volume"]}</td>
                <td className="p-3 text-center">{item["7d_volume"]}</td>
                <td className="p-3 text-center">{item.owners}</td>
                <td className="p-3 text-center">{item.supply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollectionsList;
