import React from "react";
const RestoreBin: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.44}
        d="m19.512 5.5-.345 6M5.25 5.501l.886 14.621a2 2 0 0 0 1.996 1.879H9.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.265 16.286C18.64 14.934 17.3 14 15.75 14c-1.96 0-3.5 1.5-4 3l-1-2m1.485 4.714C12.86 21.066 14.2 22 15.75 22c1.96 0 3.5-1.5 4-3l1 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.44}
        d="M3.75 5.501 8.589 5.5m0 0 1.17-2.877A1 1 0 0 1 10.687 2h3.404a1 1 0 0 1 .926.623L16.187 5.5m-7.598 0h7.598m4.563.001L16.187 5.5"
      />
    </svg>
  );
};
export default RestoreBin;
