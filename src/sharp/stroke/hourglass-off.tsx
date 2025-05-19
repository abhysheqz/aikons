import React from "react";
const HourglassOff: React.FC<
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
        d="m2 2 20 20M21 2H5.183"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 2v3a7 7 0 0 1-4.326 6.47M19 19v3H2.856M5 22v-3c0-3.442 2.827-6.994 6.995-6.994C8.51 12.006 5 9.306 5 4.954"
      />
    </svg>
  );
};
export default HourglassOff;
