import React from "react";
const Charity: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 19h12M18 16h3v6H3v-6h3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.315 19a3.39 3.39 0 0 0 1.185-2.571C15.5 14.535 13.933 13 12 13s-3.5 1.535-3.5 3.429A3.39 3.39 0 0 0 9.685 19M20 10h-3l-2.5-1.375h-1C12 8.625 11 7.476 11 6.5l3-1 3 1M11 7 6.789 8.404a2 2 0 0 1-2.49-1.155L4 6.5 13 2l7 1.98"
      />
    </svg>
  );
};
export default Charity;
