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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 7.5h4M10 16.5a3 3 0 1 1-6 0"
      />
      <circle
        cx={20}
        cy={17.5}
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
        d="M7 10.5c-2.761 0-5 2.686-5 6h10c0-3.314-2.239-6-5-6M12 16.5h1.98a1 1 0 0 0 .819-.427l2.86-4.085a1 1 0 0 0 .075-1.02L16 7.5h4c0-.5-1-3-5-3"
      />
    </svg>
  );
};
export default Scooter_01;
