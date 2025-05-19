import React from "react";
const BedBunk: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M22 9.25h-5v-2h5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M2 11.75h15v-4.5H2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 4h4v2H5zM5 13h4v2H5zM22 20.75h-5v-2h5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M2 20.75h15v-4.5H2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 13h-5v-2h5zM22 16h-5v-2h5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 22V4h2v18zM16 22V4h2v18zM1 22V4h2v18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BedBunk;
