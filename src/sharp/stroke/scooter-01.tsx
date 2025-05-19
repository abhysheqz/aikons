import React from "react";
const Scooter_01: React.FC<
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
        d="M5 8h4M10 16a3 3 0 1 1-6 0"
      />
      <circle
        cx={20}
        cy={17}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 11a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 16h2.5l3.5-4.5L16 8h4s0-3-5-3"
      />
    </svg>
  );
};
export default Scooter_01;
