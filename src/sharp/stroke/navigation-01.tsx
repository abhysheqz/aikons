import React from "react";
const Navigation_01: React.FC<
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
        d="M13.998 12.009a2 2 0 1 1-4.002.001 2 2 0 0 1 4.002-.002ZM5.995 12.014l.999-2.984a.01.01 0 0 0-.015-.012L2.005 11.95a.01.01 0 0 0 0 .017l4.976 3.032a.01.01 0 0 0 .015-.012zM18.001 12.014l-.999-2.984c-.003-.009.007-.017.015-.012l4.974 2.931a.01.01 0 0 1 0 .017l-4.976 3.032a.01.01 0 0 1-.015-.012zM11.993 18.016l2.982-1c.009-.002.017.007.012.015l-3.034 4.972a.01.01 0 0 1-.017 0L9.01 17.029a.01.01 0 0 1 .012-.014zM12.005 5.997l-2.982 1a.01.01 0 0 1-.012-.015l2.942-4.965a.01.01 0 0 1 .017 0l3.017 4.967a.01.01 0 0 1-.012.015z"
      />
    </svg>
  );
};
export default Navigation_01;
