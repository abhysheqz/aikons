import React from "react";
const Cards_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.018 20 4.29-11.525a2 2 0 0 0-1.163-2.567l-8.387-3.191a2 2 0 0 0-2.586 1.171L7 7.038M11.467 15.14a1 1 0 0 0 0-1.28l-1.199-1.438a1 1 0 0 0-1.536 0L7.533 13.86a1 1 0 0 0 0 1.28l1.199 1.438a1 1 0 0 0 1.536 0z"
      />
    </svg>
  );
};
export default Cards_01;
