import React from "react";
const FileBitcoin: React.FC<
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
        d="M11.5 22.002H5a2 2 0 0 1-2-2V9.817A2 2 0 0 1 3.587 8.4l5.829-5.817A2 2 0 0 1 10.829 2H18a2 2 0 0 1 2 2v5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.001h5a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 14h1m3.25 3.5H16m3.25 0a1.75 1.75 0 1 0 0-3.5H18m1.25 3.5a1.75 1.75 0 1 1 0 3.5H18m-2-3.5V14m0 3.5V21m-1 0h1m0-7h2m-2 7h2m0-7v-1m0 8v1"
      />
    </svg>
  );
};
export default FileBitcoin;
