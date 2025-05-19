import React from "react";
const Radial: React.FC<
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
        d="M21 12a9 9 0 0 0-9-9V1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12c0-1.988.528-3.855 1.452-5.466l1.735.995A8.95 8.95 0 0 0 3 12a9 9 0 1 0 18 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 12a6 6 0 0 0-6-6V4a8 8 0 1 1-8 8h2a6 6 0 0 0 12 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 12a3 3 0 0 0-3-3V7a5 5 0 0 1 0 10v-2a3 3 0 0 0 3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radial;
