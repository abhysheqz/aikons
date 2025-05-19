import React from "react";
const HighHeels_02: React.FC<
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
        d="M20.94 20c-.24-.44-.394-1.227-.165-2.017.297-1.028.442-1.321-.492-1.868l-1.389-.814c-.878-.515-1.062-.363-1.704.414-.783.949-2.18 2.04-4.19 2.513"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7V5.2C2 4.207 2.173 4 3 4h5c.908 0 1 .555 1 1.5S8.908 7 8 7zm0 0v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 12h1c2.454 0 3.68 0 4.736.528S9.528 14.038 11 16c2.975 3.967 6.473 4 11 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 12 1.47 7.837a.2.2 0 0 0 .196.163H4.3c.11 0 .2-.086.203-.196C4.53 18.757 4.77 13.838 7 12.5"
      />
    </svg>
  );
};
export default HighHeels_02;
