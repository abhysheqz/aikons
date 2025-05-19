import React from "react";
const UserGroup_02: React.FC<
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
        d="M7.5 19.5c0-.966.329-1.942 1.13-2.48A6.04 6.04 0 0 1 12 16c1.248 0 2.407.376 3.37 1.02.802.538 1.13 1.514 1.13 2.48"
      />
      <circle
        cx={12}
        cy={11}
        r={2.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 11c1.11 0 2.142.377 2.997 1.022.726.548 1.003 1.473 1.003 2.382v.096"
      />
      <circle
        cx={17.5}
        cy={6.5}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 11c-1.11 0-2.142.377-2.997 1.022-.726.548-1.003 1.473-1.003 2.382v.096"
      />
      <circle
        cx={6.5}
        cy={6.5}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default UserGroup_02;
