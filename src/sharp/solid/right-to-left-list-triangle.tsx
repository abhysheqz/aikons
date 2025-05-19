import React from "react";
const RightToLeftListTriangle: React.FC<
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
        d="M3.5 4.5h10v2h-10z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m16.5 5.5 4-2.5v5zM16.5 18.5l4-2.5v5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 11h10v2h-10zM3.5 17.5h10v2h-10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightToLeftListTriangle;
