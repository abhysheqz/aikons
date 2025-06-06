import React from "react";
const Plant_03: React.FC<
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
        d="M10.063 9.063a3.2 3.2 0 0 0 0-4.524C8.178 2.654 4.031 3.03 4.031 3.03s-.377 4.147 1.508 6.032a3.2 3.2 0 0 0 4.524 0M14.803 11.197a2.74 2.74 0 0 0 3.878 0c1.616-1.616 1.293-5.17 1.293-5.17s-3.555-.324-5.17 1.292a2.74 2.74 0 0 0 0 3.878M14.5 11.5S12 13.5 12 17c0-5-2-7.5-2-7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21a12.05 12.05 0 0 0-9-4 12.05 12.05 0 0 0-9 4"
      />
    </svg>
  );
};
export default Plant_03;
