import React from "react";
const Grinning: React.FC<
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
        d="M21.8 10q.198.97.2 2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.231 0 2.41.223 3.5.63"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.518 2-1.801 1.785a2.48 2.48 0 0 0 .017 3.504 2.53 2.53 0 0 0 3.534-.016 2.464 2.464 0 0 0 0-3.504z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9c.423.317 1.192.71 1.29 1.341q.008.056.01.11c.024.43-.286.803-.905 1.549M16 9c-.423.317-1.192.71-1.29 1.341q-.008.056-.01.11c-.024.43.286.803.905 1.549"
      />
    </svg>
  );
};
export default Grinning;
