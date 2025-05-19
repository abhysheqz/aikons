import React from "react";
const ThreeFinger_02: React.FC<
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
        strokeWidth={1.5}
        d="M7.76 13.48 7.74 5.028a1.5 1.5 0 1 1 3.002-.003m0 0v4.98m0-4.98V3.497a1.5 1.5 0 1 1 3.001.004v7.51m3.001.987v-1.853m0 0V5.483a1.5 1.5 0 1 0-3-.003m3 4.665c.807-.121 2.78 0 3.002 1.857v3.682c0 1.36-.23 2.46-1.619 4.057-.515.675-.443 1.354-.443 2.261M7.75 8.999c-.637.556-2.248 2.079-3.151 3.457-1.255 1.913 1.223 4.407 2.248 5.796 1.516 1.813 1.415 1.762 1.415 3.743"
      />
    </svg>
  );
};
export default ThreeFinger_02;
