import React from "react";
const Zoom: React.FC<
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
        d="M1.998 14V6h8.994a4 4 0 0 1 3.998 4v8H5.995a4 4 0 0 1-3.997-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.987 7.014 17.476 9.97V14l4.51 2.99a.01.01 0 0 0 .016-.007v-9.96a.01.01 0 0 0-.015-.009Z"
      />
    </svg>
  );
};
export default Zoom;
