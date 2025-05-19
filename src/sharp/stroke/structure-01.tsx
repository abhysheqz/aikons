import React from "react";
const Structure_01: React.FC<
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
        d="M2.008 21 2 17h6l-.01 4M12 9v4m0 0H5.001L5 17m7-4h7v4M16.008 21 16 17h6l-.01 4M16 9V3H8v6z"
      />
    </svg>
  );
};
export default Structure_01;
