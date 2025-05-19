import React from "react";
const SolarPanel_02: React.FC<
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
        d="M16.29 2.5H8.017c-1.144 0-1.716 0-2.141.293-.426.294-.594.804-.93 1.825l-2.308 7c-.585 1.776-.878 2.664-.396 3.273s1.477.609 3.468.609h8.273c1.144 0 1.715 0 2.141-.293.426-.294.594-.804.93-1.825l2.308-7c.585-1.776.878-2.664.396-3.273S18.281 2.5 16.29 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 6-3.042 9.213c-.444 1.343-.666 2.015-1.227 2.4-.56.387-1.315.387-2.823.387H4M4.5 7H19m-1.5 4H3M11 18.5v3m0 0h2m-2 0H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 2.5h-5l-4 13h5z"
      />
    </svg>
  );
};
export default SolarPanel_02;
