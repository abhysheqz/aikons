import React from "react";
const Stationery: React.FC<
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
        d="M5 7V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3M5 7v12l1.5 2L8 19V7M5 7h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19.998a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1zM12 16.499l2.5.001M12 11.999l2.5.001M12 7.5h2.5"
      />
    </svg>
  );
};
export default Stationery;
