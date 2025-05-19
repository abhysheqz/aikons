import React from "react";
const AirplaneTakeOff_02: React.FC<
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
        d="M6.002 17.75h16v2h-16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.576 7.183c2.04-2.784 5.82-3.709 8.92-2.242 0 0 5.78 2.648 6.793 3.126l1.628-2.036a.75.75 0 0 1 .971-.174l2.5 1.5a.75.75 0 0 1 .32.9l-2 5.5a.75.75 0 0 1-.874.474l-5.197-1.2.577 1.732a.75.75 0 0 1-.949.948l-4.5-1.5a.75.75 0 0 1-.459-.433l-.865-2.163-5.894-1.754c-1.082-.3-1.724-1.634-.975-2.673z"
      />
    </svg>
  );
};
export default AirplaneTakeOff_02;
