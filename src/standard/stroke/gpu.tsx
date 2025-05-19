import React from "react";
const Gpu: React.FC<
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
        d="M4 21V3H2M4 5h16a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-9l-1-2H4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M7.5 8.5h2m-2 3h2m-2 3h2"
      />
    </svg>
  );
};
export default Gpu;
