import React from "react";
const Stamp: React.FC<
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
        d="M5 18a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3H5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.5 16-.5-5.535a4 4 0 1 0-4 0L9.5 16M14 13h-4"
      />
    </svg>
  );
};
export default Stamp;
