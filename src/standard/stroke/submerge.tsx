import React from "react";
const Submerge: React.FC<
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
      <circle
        cx={12}
        cy={14}
        r={4}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 2v.5M7 5v1m0 2.5v1M17 2v1m0 2.5V6m0 2.5v1M12 2v1m0 2.5v1M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 14.897c2.264 1.97 4.174.882 6.022-.04 1.575-.786 3.104-1.452 4.768 0C16.047 17.649 19 14 22 14"
      />
    </svg>
  );
};
export default Submerge;
