import React from "react";
const LeftToRightListTriangle: React.FC<
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
        d="M20.5 6.5h-10v-2h10z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M7.5 5.5 3.5 3v5zM7.5 18.5l-4-2.5v5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 13h-10v-2h10zM20.5 19.5h-10v-2h10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListTriangle;
