import React from "react";
const Invoice_02: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 10H8M16 6H8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 21.5V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v17.5l4-2 4 2.5 4-2.5z"
      />
      <path
        fill="currentColor"
        d="M15.372 11.91a.75.75 0 0 0 1.256-.82zm-1.744 2.18a.75.75 0 0 0-1.256.82zm.122-3.34a.75.75 0 0 0 1.5 0zm1.5-.75a.75.75 0 0 0-1.5 0zm0 5.25a.75.75 0 0 0-1.5 0zm-1.5.75a.75.75 0 0 0 1.5 0zm.782-4.5c.392 0 .695.188.84.41l1.256-.82c-.44-.675-1.233-1.09-2.096-1.09zm0-1.5c-.484 0-1.016.12-1.453.402-.456.295-.829.792-.829 1.473h1.5c0-.069.02-.134.144-.214.143-.093.377-.161.638-.161zm-2.282 1.875c0 .345.073.667.237.949.164.283.394.481.636.616.455.253.986.297 1.352.31l.05-1.5c-.334-.01-.553-.054-.673-.121-.046-.025-.06-.045-.067-.058s-.035-.066-.035-.196zm2.218 2.625c-.392 0-.695-.188-.84-.41l-1.256.82c.44.675 1.233 1.09 2.096 1.09zm0 1.5c.484 0 1.016-.12 1.453-.402.456-.295.829-.792.829-1.473h-1.5c0 .069-.02.134-.144.214a1.2 1.2 0 0 1-.638.161zm2.282-1.875c0-.344-.073-.667-.237-.949a1.65 1.65 0 0 0-.636-.616c-.455-.253-.986-.297-1.352-.31l-.05 1.5c.334.01.553.054.673.121.046.025.06.045.067.058s.035.066.035.196zm-1.5-3.375V10h-1.5v.75zm-1.5 4.5V16h1.5v-.75z"
      />
    </svg>
  );
};
export default Invoice_02;
