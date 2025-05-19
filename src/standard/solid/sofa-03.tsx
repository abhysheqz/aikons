import React from "react";
const Sofa_03: React.FC<
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
        d="M8.08 6a2 2 0 0 0-1.873 1.298l-.477 1.27.016.011c.48.366.842.87 1.13 1.438L8.066 12h7.868l1.192-1.983c.288-.567.65-1.072 1.13-1.438l.014-.01-.476-1.271A2 2 0 0 0 15.92 6zm12.116 2.006-.53-1.41A4 4 0 0 0 15.922 4H8.08a4 4 0 0 0-3.745 2.596l-.53 1.41a3 3 0 0 0-.458 5.923l.707 1.413A3 3 0 0 0 6 16.908V19a1 1 0 1 0 2 0v-2h8v2a1 1 0 1 0 2 0v-2.091a3 3 0 0 0 1.95-1.567l.706-1.413a3.001 3.001 0 0 0-.46-5.923"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sofa_03;
