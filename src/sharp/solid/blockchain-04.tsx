import React from "react";
const Blockchain_04: React.FC<
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
        d="M8 5h5v2H8zM11 17h5v2h-5zM19 8v5h-2V8zM7 11v5H5v-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 2.25h7.5v7.5h-7.5zM2.25 2.25h7.5v7.5h-7.5zM2.25 14.25h7.5v7.5h-7.5zM14.25 14.25h7.5v7.5h-7.5z"
      />
    </svg>
  );
};
export default Blockchain_04;
