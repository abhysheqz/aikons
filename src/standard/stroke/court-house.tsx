import React from "react";
const CourtHouse: React.FC<
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
        d="M20 19H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1M13 9h-2M9.5 19v-4m5 4v-4M19 5V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12v7h14v-7M5 9c0-1 .65-1.5 1.453-1.5C7.545 7.5 8 8.56 8 9.5A2.5 2.5 0 0 1 5.5 12a3.5 3.5 0 1 1 0-7h13a3.5 3.5 0 1 1 0 7A2.5 2.5 0 0 1 16 9.5c0-.94.455-2 1.547-2C18.35 7.5 19 8 19 9"
      />
    </svg>
  );
};
export default CourtHouse;
