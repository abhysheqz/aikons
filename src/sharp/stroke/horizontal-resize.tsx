import React from "react";
const HorizontalResize: React.FC<
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
        d="M10 20V4M14 20V4M10 12H6M18 12h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.009 12.008 17 9.022c-.003-.009.006-.016.014-.012l4.98 3.043a.01.01 0 0 1 0 .017l-4.969 2.914c-.007.004-.017-.004-.014-.012zM6.001 12.008 7 9.026a.01.01 0 0 0-.015-.012l-4.98 3.043a.01.01 0 0 0 0 .017l4.982 2.915a.01.01 0 0 0 .015-.012z"
      />
    </svg>
  );
};
export default HorizontalResize;
