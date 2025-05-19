import React from "react";
const BasketballHoop: React.FC<
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
        strokeWidth={1.5}
        d="M5 17c-.628-.135-1.121-.351-1.538-.698a4 4 0 0 1-.554-.563C2 14.616 2 12.95 2 9.612s0-5.005.908-6.128a4 4 0 0 1 .554-.563C4.57 2 6.212 2 9.5 2h5c3.288 0 4.931 0 6.038.921q.304.255.554.563C22 4.607 22 6.275 22 9.612c0 3.336 0 5.004-.908 6.127a4 4 0 0 1-.554.563c-.417.347-.91.563-1.538.698"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 13h1.333m0 0L8.5 22m-1.167-9H12m6 0h-1.333m0 0L15.5 22m1.167-9H12m0 0v9M8 10c.059-1.952 1.262-2 2.998-2h2.004c1.736 0 2.94.048 2.998 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 16.5h8M8.444 20h7.112"
      />
    </svg>
  );
};
export default BasketballHoop;
