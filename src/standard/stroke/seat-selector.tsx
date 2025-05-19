import React from "react";
const SeatSelector: React.FC<
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
        d="M7 18v-6.5a1.5 1.5 0 0 0-3 0V16a2 2 0 0 0 2 2zM20 16v-4.5a1.5 1.5 0 0 0-3 0V18h1a2 2 0 0 0 2-2M17 14H7v4h10zM14.5 22h-5v-4h5zM7 22h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 10V4a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v6"
      />
    </svg>
  );
};
export default SeatSelector;
