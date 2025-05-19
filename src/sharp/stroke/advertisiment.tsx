import React from "react";
const Advertisiment: React.FC<
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
        d="M22 4H2v18h20z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m5.54 17.083 3.538-8.55 3.433 8.55M6.818 14.02h4.513"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.513 15.003c0-1.106.897-2.003 2.004-2.003h1.974v4.007h-1.974a2.003 2.003 0 0 1-2.004-2.004ZM18.495 12.989l.027-2.966"
      />
    </svg>
  );
};
export default Advertisiment;
