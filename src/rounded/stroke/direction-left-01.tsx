import React from "react";
const DirectionLeft_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.148 5.68c.678-.827 1.017-1.24 1.48-1.46S8.623 4 9.682 4H15v7H9.681c-1.059 0-1.589 0-2.052-.22s-.803-.633-1.48-1.46l-.27-.326C5.294 8.28 5 7.922 5 7.5s.293-.78.88-1.494zM15 21V3M11 21h8"
      />
    </svg>
  );
};
export default DirectionLeft_01;
