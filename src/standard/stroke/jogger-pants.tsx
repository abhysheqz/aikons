import React from "react";
const JoggerPants: React.FC<
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
        d="M10 7.778 12 5l3 5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 5V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2M6 5 3 22h5l4-10 4 10h5L18 5M6 5h12"
      />
    </svg>
  );
};
export default JoggerPants;
