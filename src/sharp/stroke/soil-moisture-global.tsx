import React from "react";
const SoilMoistureGlobal: React.FC<
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
        strokeWidth={1.5}
        d="M19.5 16S17 17.5 17 19.503c0 1.231.947 2.497 2.5 2.497s2.5-1.266 2.5-2.497C22 17.5 19.5 16 19.5 16Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c-4.1 0-7.625 2.468-9.168 6M21.998 8C15.656 8 10.3 12.217 8.578 18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4C13.432 4 6.263 9.984 4.444 18M2 10c.878 0 1.73.113 2.541.326M2 6c1.866 0 3.647.365 5.275 1.028M2 2c3.175 0 6.159.822 8.749 2.265"
      />
    </svg>
  );
};
export default SoilMoistureGlobal;
