import React from "react";
const DirectionRight_01: React.FC<
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
        d="M17.852 5.68c-.678-.827-1.018-1.24-1.48-1.46C15.907 4 15.377 4 14.318 4H9v7h5.319c1.059 0 1.589 0 2.052-.22s.803-.633 1.48-1.46l.27-.326C18.706 8.28 19 7.922 19 7.5s-.293-.78-.88-1.494zM9 3v18M5 21h8"
      />
    </svg>
  );
};
export default DirectionRight_01;
