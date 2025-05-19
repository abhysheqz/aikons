import React from "react";
const MicOff_01: React.FC<
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
        d="M21.336 23 1.25 2.914 2.664 1.5 22.75 21.586z"
      />
      <path
        fill="currentColor"
        d="M11 19.695c-4.5-.497-8-4.312-8-8.945h2a7 7 0 0 0 11.144 5.642l1.426 1.427A8.96 8.96 0 0 1 13 19.695V21h2v2H9v-2h2zM19 10.75h2a8.96 8.96 0 0 1-1.7 5.264l-1.437-1.438A6.97 6.97 0 0 0 19 10.75"
      />
      <path
        fill="currentColor"
        d="M6.25 6.75v4a5.75 5.75 0 0 0 8.997 4.746L6.255 6.504a6 6 0 0 0-.005.246M17.75 10H14v.75L7.072 3.785A5.751 5.751 0 0 1 17.702 6H14v1.5h3.75zM16.955 13.668a5.7 5.7 0 0 0 .746-2.168h-2.914z"
      />
    </svg>
  );
};
export default MicOff_01;
