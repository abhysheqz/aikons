import React from "react";
const Bookshelf_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 19v3m14-3v3M3 11h18M3 19V2h18v17zM11.5 11l-2-5m8.5 5-1-5M7 11V6m7 5V6M10 16h4"
      />
    </svg>
  );
};
export default Bookshelf_02;
