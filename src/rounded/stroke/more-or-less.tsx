import React from "react";
const MoreOrLess: React.FC<
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
        strokeWidth={1.5}
        d="M4 12h16M20 7H7.003c-1.821 0-2.732 0-2.958-.617-.227-.618.417-1.344 1.705-2.797L6.269 3M4 17h12.997c1.821 0 2.732 0 2.958.617.227.618-.417 1.344-1.705 2.797l-.519.586"
      />
    </svg>
  );
};
export default MoreOrLess;
