import React from "react";
const Imo: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6.496 8.977v.045m-.018 1.954.018 4.013M8.908 15.006l-.018-4.013h4.807a.01.01 0 0 1 .01.01l.018 4.003M11.3 10.993l.018 4.013"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.117 11.003a.01.01 0 0 1 .01-.01h2.364a.01.01 0 0 1 .01.01v3.993a.01.01 0 0 1-.01.01h-2.364a.01.01 0 0 1-.01-.01z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22.002c5.524 0 10.002-4.478 10.002-10.002S17.524 1.998 12 1.998 1.998 6.476 1.998 12c0 1.889.434 3.498 1.344 5.005l-1.34 4.98a.01.01 0 0 0 .013.012l4.955-1.331c1.513.92 3.13 1.336 5.03 1.336Z"
      />
    </svg>
  );
};
export default Imo;
