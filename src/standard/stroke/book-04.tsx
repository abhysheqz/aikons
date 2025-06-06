import React from "react";
const Book_04: React.FC<
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
        d="M16 13H8m4 4H8M19.543 2H6.5A2.5 2.5 0 0 0 4 4.5m3.5 0h9a1 1 0 0 1 1 1V7M4 4.5l.004 14.496a3 3 0 0 0 3 3.004H20V7h-2.5M4 4.5A2.5 2.5 0 0 0 6.5 7h11"
      />
    </svg>
  );
};
export default Book_04;
