import React from "react";
const Tiff_01: React.FC<
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
        d="m4 12.998.02-9.002A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5M4 16h1.75m0 0H7.5m-1.75 0v6M15 16h-2.5v3m0 0v3m0-3H15m5-3h-2.5v3m0 0v3m0-3H20m-10-3v6"
      />
    </svg>
  );
};
export default Tiff_01;
