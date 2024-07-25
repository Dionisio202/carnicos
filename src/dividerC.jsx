import React from "react";

export function Divider({ text }) {
  return (
    <div className="flex items-center">
      <span className="text-gray-300 text-xl font-bold whitespace-nowrap mr-4">{text}</span>
      <div className="flex-grow h-px bg-gray-300"></div>
    </div>
  );
}
