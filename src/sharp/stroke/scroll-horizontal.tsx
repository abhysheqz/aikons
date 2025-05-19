import React from "react";
const ScrollHorizontal: React.FC<
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
        strokeWidth={1.5}
        d="M14.002 11.996a1.998 1.998 0 1 1-3.997-.001 1.998 1.998 0 0 1 3.997 0ZM17.54 11.993l-1.53-3.99c-.003-.01.008-.02.017-.014l5.97 3.958c.008.005.008.017 0 .022l-5.963 4.016c-.009.005-.02-.004-.016-.015zM6.514 11.98l1.483-3.976c.004-.011-.007-.02-.016-.015l-5.97 3.958c-.008.005-.008.017 0 .022l5.963 4.016c.009.005.02-.004.016-.015z"
      />
    </svg>
  );
};
export default ScrollHorizontal;
