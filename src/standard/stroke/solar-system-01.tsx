import React from "react";
const SolarSystem_01: React.FC<
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
        d="M3.5 6.73A9.95 9.95 0 0 0 2 12c0 5.523 4.477 10 10 10 1.045 0 2.053-.16 3-.458m5.353-4.042A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10-1.045 0-2.053.16-3 .458"
      />
      <circle
        cx={5}
        cy={5}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={19}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={8}
        cy={15}
        r={2}
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
        d="M12 17a5 5 0 1 0-4.9-4M12.009 12H12"
      />
    </svg>
  );
};
export default SolarSystem_01;
