import React from "react";
const BabyBed_02: React.FC<
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
        d="M2.5 3a1 1 0 1 0 0 2H3v11.468q-.218-.14-.426-.287a1 1 0 1 0-1.148 1.638C4.27 19.811 7.973 21 12 21s7.731-1.19 10.574-3.18a1 1 0 0 0-1.148-1.639q-.21.147-.426.287V5h.5a1 1 0 1 0 0-2H21a2 2 0 0 0-2 2v1H5V5a2 2 0 0 0-2-2zM17 8h2v6h-2zm-2 6V8h-2v6zm-4 0V8H9v6zm-4 0V8H5v6zm-2 2v1.55c2.056.92 4.444 1.45 7 1.45s4.944-.53 7-1.45V16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BabyBed_02;
