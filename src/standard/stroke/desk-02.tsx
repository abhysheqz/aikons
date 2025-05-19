import React from "react";
const Desk_02: React.FC<
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
        d="M21 20V8M14 8v6a2 2 0 0 0 2 2h5M21 12h-7M22 4H2M21 8H3M3 4v16M21 4v4"
      />
    </svg>
  );
};
export default Desk_02;
