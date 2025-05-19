import React from "react";
const Fiverr: React.FC<
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
        d="M6 8H3v4h3v10h4.5V12H15v10h5V8h-9V7a1.5 1.5 0 0 1 1.5-1.5H15V2h-4a5 5 0 0 0-5 5z"
      />
    </svg>
  );
};
export default Fiverr;
