import React from "react";
const TropicalStormTracks_02: React.FC<
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
        d="M17 9.5 19.5 7m0 0L22 9.5M19.5 7v6a7 7 0 0 1-7 7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 4.379 12 6c1.226 1.048 2 2.756 2 4.5 0 5.956-7.419 7.272-12 6.122L5 15c-1.226-1.048-2-2.756-2-4.5 0-5.956 7.419-7.272 12-6.121"
      />
    </svg>
  );
};
export default TropicalStormTracks_02;
