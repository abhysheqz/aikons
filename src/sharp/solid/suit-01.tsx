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
        d="m1.853 5.265 2.897-.58V8a2.25 2.25 0 0 0 3.407 1.93L12 7.624l3.842 2.306A2.25 2.25 0 0 0 19.25 8V4.686l2.897.579a.75.75 0 0 1 .59.874L19.623 22.75H4.377L1.263 6.14a.75.75 0 0 1 .59-.874M13.009 11h-2.01v2h2.01zm0 3.5h-2.01v2h2.01zm0 3.5h-2.01v2h2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.63 1.347a.75.75 0 0 1 .756.01L12 4.125l4.614-2.768A.75.75 0 0 1 17.75 2v6a.75.75 0 0 1-1.136.643L12 5.875 7.386 8.643A.75.75 0 0 1 6.25 8V2c0-.27.145-.52.38-.653"
      />
    </svg>
  );
};
export default Suit_01;
