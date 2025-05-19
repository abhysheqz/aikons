import React from "react";
const LocationUser_03: React.FC<
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
        d="M5.778 15.98C4.666 16.612 4 17.417 4 18.293c0 2.032 3.582 3.679 8 3.679s8-1.648 8-3.68c0-.875-.666-1.68-1.778-2.312"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.988 7.056c3.038 0 5.15 2.482 5 5.443v1.363H14.92l-1.24 5.113h-3.384l-1.222-5.113H7.006v-1.8c.113-2.9 2.068-4.878 4.982-5.006Zm0 0c1.519 0 2.51-1.264 2.51-2.658 0-1.206-1.045-2.423-2.51-2.423S9.493 3.145 9.493 4.48s.976 2.576 2.495 2.576Z"
      />
    </svg>
  );
};
export default LocationUser_03;
