import React from "react";
const Unlink_05: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M7 8a4 4 0 1 0 0 8h3a1 1 0 1 1 0 2H7A6 6 0 0 1 7 6h3a1 1 0 1 1 0 2zm6-1a1 1 0 0 1 1-1h3a6 6 0 0 1 0 12h-3a1 1 0 1 1 0-2h3a4 4 0 0 0 0-8h-3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.5 21 14 19.5M8.5 21l1.5-1.5M8.5 3 10 4.5M15.5 3 14 4.5"
      />
    </svg>
  );
};
export default Unlink_05;
