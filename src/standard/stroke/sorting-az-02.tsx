import React from "react";
const SortingAz_02: React.FC<
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
        d="M4.5 14h5v.5l-5 6v.5h5M4 9.5 6.5 3h1L10 9.5M14 17l3 3 3-3M17 4v15.391"
      />
    </svg>
  );
};
export default SortingAz_02;
