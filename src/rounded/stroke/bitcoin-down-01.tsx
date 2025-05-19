import React from "react";
const BitcoinDown_01: React.FC<
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
        d="M12 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M9.5 19.5c.492.506 1.8 2.5 2.5 2.5m2.5-2.5c-.492.506-1.8 2.5-2.5 2.5m0 0v-4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.438 11.167V5.833m1.562 0V4.5m0 8v-1.333M10.438 8.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 8.5c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"
      />
    </svg>
  );
};
export default BitcoinDown_01;
