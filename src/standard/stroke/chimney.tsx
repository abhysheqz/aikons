import React from "react";
const Chimney: React.FC<
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
        d="m15.5 22-1-5c-.587-2.642-1-6.293-1-9h-7c0 3-.413 6.358-1 9l-1 5M3 22h14M17 2h-4a3 3 0 0 0-3 3m10-3h1M13 5h6"
      />
    </svg>
  );
};
export default Chimney;
