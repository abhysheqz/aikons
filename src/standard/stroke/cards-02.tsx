import React from "react";
const Cards_02: React.FC<
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
        d="M14 7H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.557 12.207c-1.197-.595-2.057.282-2.057.282s-.86-.877-2.057-.282c-1.45.72-1.555 3.54 2.057 4.793 3.612-1.252 3.508-4.073 2.057-4.793"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.018 20 4.29-11.525a2 2 0 0 0-1.163-2.567l-8.387-3.191a2 2 0 0 0-2.586 1.171L7 7.038"
      />
    </svg>
  );
};
export default Cards_02;
