import React from "react";
const LaptopCloud: React.FC<
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
        d="M22.5 20.5h-21l2-4h17zM20.5 16.5V5A1.5 1.5 0 0 0 19 3.5H5A1.5 1.5 0 0 0 3.5 5v11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 12.5a1.5 1.5 0 0 1 0-3h.5a2 2 0 1 1 4 0h.5a1.5 1.5 0 0 1 0 3z"
      />
    </svg>
  );
};
export default LaptopCloud;
