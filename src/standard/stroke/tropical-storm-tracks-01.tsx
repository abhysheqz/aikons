import React from "react";
const TropicalStormTracks_01: React.FC<
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
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 2C9.5 2 6 7 5.5 9.5 4 8.5 3 7.5 2 6.5c0 8 5 11.5 7.5 12-1 1.5-2 2.5-3 3.5 8 0 11.5-5 12-7.5 1.5 1 2.5 2 3.5 3 0-8-5-11.5-7.5-12 1-1.5 2-2.5 3-3.5Z"
      />
    </svg>
  );
};
export default TropicalStormTracks_01;
