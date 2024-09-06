"use client";
import React, { useState } from "react";
import { TrendingUp, Star, Award, LayoutGrid, LayoutList } from "lucide-react";

const SubNavbar = () => {
    const [selectedItem, setSelectedItem] = useState("TOKENS");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const handleSelect = (item: string) => {
        setSelectedItem(item);
    };

    return (
        <div className="bg-black text-gray-400 p-2 h-16 flex justify-between items-center sticky top-16 z-10">
            <div className="flex space-x-6 ml-3.5">
                {["TOKENS", "TRENDING", "FAVORITES", "POINTS"].map((item) => (
                    <NavItem
                        key={item}
                        icon={
                            item === "TOKENS" ? (
                                <LayoutGrid size={16} />
                            ) : item === "TRENDING" ? (
                                <TrendingUp size={16} />
                            ) : item === "FAVORITES" ? (
                                <Star size={16} />
                            ) : (
                                <Award size={16} />
                            )
                        }
                        text={item}
                        active={selectedItem === item}
                        onClick={() => handleSelect(item)}
                    />
                ))}
        <div className="absolute top-16 left-0 right-5 border-b-thin border-gray-300 border-opacity-30"></div>

            </div>
            <div className="flex space-x-2 mr-3">
                <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1 rounded ${viewMode === "grid" ? "text-Yellop " : ""}`}
                >
                    <LayoutGrid size={18} />
                </button>
                <button
                    onClick={() => setViewMode("list")}
                    className={`p-1 rounded ${viewMode === "list" ? "text-Yellop " : ""}`}
                >
                    <LayoutList size={18} />
                </button>
            </div>
        </div>
    );
};

const NavItem = ({
    icon,
    text,
    active = false,
    onClick,
}: {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    onClick: () => void;
}) => (
    <div
        className={`flex flex-col items-center cursor-pointer relative ${active ? "text-Yellop" : "hover:text-white"
            }`}
        onClick={onClick}
    >
        <div className="flex items-center space-x-2">
            {icon}
            <span className="text-sm font-semibold">{text}</span>
        </div>
        {active && (
            <div className="absolute top-10 left-0 right-0 border-b-thin-md border-Yellop"></div>
        )}
    </div>
);

export default SubNavbar;
