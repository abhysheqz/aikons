import React from "react";
const Apron: React.FC<
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
        d="M19 11v11H5V11m3-3h8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M14.5 13h-5v5h5z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.03 6.5c1.86 1.392.874 4.5-1.506 4.5-2.812 0-2.509-3.065-2.509-5 0-2.21-1.798-4-4.015-4a4.01 4.01 0 0 0-4.015 4c0 1.935.303 5-2.51 5-2.38 0-3.365-3.108-1.505-4.5"
      />
    </svg>
  );
};
export default Apron;
