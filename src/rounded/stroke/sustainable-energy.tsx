import React from "react";
const SustainableEnergy: React.FC<
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
        d="M17.253 19.917A9.5 9.5 0 0 0 9.89 2.736m7.364 17.18V17m0 2.917H20.5M6.722 4.1a9.5 9.5 0 0 0 7.389 17.165M6.722 4.1V7m0-2.9H3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 7 9 12h6l-3.5 5"
      />
    </svg>
  );
};
export default SustainableEnergy;
