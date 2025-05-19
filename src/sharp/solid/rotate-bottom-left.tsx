import React from "react";
const RotateBottomLeft: React.FC<
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
        d="M15 17.25a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75H2a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 12.664-3.293-3.12a1 1 0 0 0-1.707.706v9h-8v2h9a1 1 0 0 0 1-1v-7.586l1.586 1.415z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateBottomLeft;
