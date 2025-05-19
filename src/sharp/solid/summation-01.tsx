import React from "react";
const Summation_01: React.FC<
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
        d="M4.087 2.592A1 1 0 0 1 5 2h14a1 1 0 0 1 1 1v3.857h-2V4H7.239l7.168 8-7.168 8H18L18 17.143h2V21a1 1 0 0 1-1 1H5a1 1 0 0 1-.745-1.667L11.722 12 4.255 3.667a1 1 0 0 1-.168-1.075"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Summation_01;
