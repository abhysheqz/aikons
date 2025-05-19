import React from "react";
const RotateBottomRight: React.FC<
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
        d="M9 17.25a.75.75 0 0 1-.75-.75v-13A.75.75 0 0 1 9 2.75h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m1.25 12.664 3.293-3.12a1 1 0 0 1 1.707.706v9h8v2h-9a1 1 0 0 1-1-1v-7.586L2.664 14.08z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateBottomRight;
