import React from "react";
const GoogleHome: React.FC<
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
        d="M22 11.27C22 16.644 17.523 21 12 21S2 16.644 2 11.27c0-2.503.972-4.786 2.569-6.51.445-.482.668-.722 1.315-1.047.648-.325 1.104-.374 2.016-.473A40 40 0 0 1 12 3c1.489 0 2.977.12 4.1.24.912.099 1.368.148 2.016.473s.87.565 1.315 1.046A9.55 9.55 0 0 1 22 11.27"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 4c0 1.105-2.686 2-6 2s-6-.895-6-2"
      />
    </svg>
  );
};
export default GoogleHome;
