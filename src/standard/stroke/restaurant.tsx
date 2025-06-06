import React from "react";
const Restaurant: React.FC<
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
        d="M3 12v5m0 0h5v4m-5-4v4"
      />
      <path
        fill="currentColor"
        d="M3.665 6.33a.75.75 0 0 0 .67 1.34zm16 1.34a.75.75 0 1 0 .67-1.34zM18.75 6a.75.75 0 0 0-1.5 0zm-1.5 4a.75.75 0 0 0 1.5 0zM6.75 6a.75.75 0 0 0-1.5 0zm-1.5 4a.75.75 0 0 0 1.5 0zm6.303-6.776-.336-.671zM4.335 7.67l7.553-3.777-.67-1.341-7.553 3.776zm7.777-3.777 7.553 3.777.67-1.342-7.552-3.776zM17.25 6v4h1.5V6zm-12 0v4h1.5V6zm6.638-2.106a.25.25 0 0 1 .224 0l.67-1.341a1.75 1.75 0 0 0-1.565 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12v5m0 0h-5v4m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1"
      />
    </svg>
  );
};
export default Restaurant;
