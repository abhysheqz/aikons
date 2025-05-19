import React from "react";
const Suit_01: React.FC<
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
        d="M8.482 2.252c-1.166-.7-2.65.14-2.65 1.5v2.466c0 1.36 1.484 2.2 2.65 1.5l3.1-1.858 3.1 1.859c1.166.7 2.65-.141 2.65-1.501V3.753c0-1.36-1.484-2.2-2.65-1.501l-3.1 1.859zM2.408 5.054l2.176-.434v1.597c0 2.332 2.543 3.772 4.542 2.573l2.458-1.473L14.04 8.79c2 1.2 4.543-.241 4.543-2.573V4.614l2.178.439a1.75 1.75 0 0 1 1.375 2.037l-2.51 13.403a2.75 2.75 0 0 1-2.704 2.244H6.243a2.75 2.75 0 0 1-2.702-2.244l-2.51-13.4a1.75 1.75 0 0 1 1.377-2.04m9.176 4.933a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 3.498a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 3.498a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Suit_01;
