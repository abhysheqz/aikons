import React from "react";
const MobileNavigator_01: React.FC<
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
        d="M4 22h16V2H4z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 10c0 2.8-3.5 4.4-3.5 4.4S8.5 12.8 8.5 10c0-1.988 1.567-3.6 3.5-3.6s3.5 1.612 3.5 3.6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 19h3"
      />
    </svg>
  );
};
export default MobileNavigator_01;
