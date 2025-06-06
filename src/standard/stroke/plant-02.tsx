import React from "react";
const Plant_02: React.FC<
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
        d="M6 15h12M7 15l.755 5.283A2 2 0 0 0 9.735 22h4.53a2 2 0 0 0 1.98-1.717L17 15M10.063 8.063a3.2 3.2 0 0 0 0-4.524C8.178 1.654 4.031 2.03 4.031 2.03s-.377 4.147 1.508 6.032a3.2 3.2 0 0 0 4.524 0M14.803 10.197a2.74 2.74 0 0 0 3.878 0c1.616-1.616 1.293-5.17 1.293-5.17s-3.555-.324-5.17 1.292a2.74 2.74 0 0 0 0 3.878"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 10.5S12 12.5 12 15c0-4-2-6.5-2-6.5"
      />
    </svg>
  );
};
export default Plant_02;
