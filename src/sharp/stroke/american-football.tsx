import React from "react";
const AmericanFootball: React.FC<
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
        d="M21.3 6.052a4.215 4.215 0 0 0-3.365-3.365c-4.197-.699-8.606.574-11.636 3.599C3.27 9.31 1.99 13.716 2.685 17.912a4.22 4.22 0 0 0 3.365 3.365c4.171.797 8.65-.574 11.642-3.598 3.058-3.006 4.337-7.43 3.609-11.627ZM4 20 20 4M8 12l4 4m0-8 4 4"
      />
    </svg>
  );
};
export default AmericanFootball;
