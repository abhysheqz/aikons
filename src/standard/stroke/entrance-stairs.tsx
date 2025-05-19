import React from "react";
const EntranceStairs: React.FC<
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
        d="M4 10a8 8 0 1 1 16 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 18H8a1 1 0 0 0-1 1v3M20 14h-8a1 1 0 0 0-1 1v3M19.5 10H16a1 1 0 0 0-1 1v3"
      />
    </svg>
  );
};
export default EntranceStairs;
