import React from "react";
const Plug_01: React.FC<
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
        d="M15.5 2v4m-7 0V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.004 7.613C5.937 6.743 6.64 6 7.53 6h8.94c.89 0 1.593.743 1.526 1.613l-.184 2.379a9.9 9.9 0 0 1-1.68 4.785l-.6.885A3.08 3.08 0 0 1 12.983 17h-1.968a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17v5M11 9h2"
      />
    </svg>
  );
};
export default Plug_01;
