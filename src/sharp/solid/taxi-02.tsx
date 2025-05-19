import React from "react";
const Taxi_02: React.FC<
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
        d="M8.25 6.25H7l-1.973 4.734 1.065.266h11.815l1.065-.266L17 6.25H8.25m7.5-1.5H18l2.322 5.571L21.85 8.95l.9 1.2-1.732 1.524 1.732 2.599v7.477h-3.777v-3H5.028v3H1.25v-7.477l1.733-2.599L1.25 10.15l.9-1.2 1.529 1.371L6 4.75h2.25v-2.5h7.5zM19 14v2.01h-2V14zM7 16.01V14H5v2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Taxi_02;
