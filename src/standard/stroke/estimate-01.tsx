import React from "react";
const Estimate_01: React.FC<
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
        d="M18 8.5V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6h9M6 10h1M10 10h1M14 10h1M6 14h1M10 14h1M18 12v1.364m0 0c-1.519 0-2.75.844-2.75 1.885 0 1.042.75 1.616 2.75 1.616s3 .54 3 1.886c0 1.347-1.343 1.885-3 1.885m0-7.272c1.519 0 2.75.844 2.75 1.885M18 20.636V22m0-1.364c-1.657 0-3-.844-3-1.885"
      />
    </svg>
  );
};
export default Estimate_01;
