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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 16S17 17.5 17 19.503c0 1.231.947 2.497 2.5 2.497s2.5-1.266 2.5-2.497C22 17.5 19.5 16 19.5 16M22 12c-4.026 0-7.485 2.468-9 6M22 8c-6.143 0-11.833 4.217-13.5 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4C13.432 4 6.318 9.984 4.5 18M2 10c.5 0 1.5 0 2.5.5M2 6c1.866 0 3.372.337 5 1M2 2c3.175 0 6 1 8.5 2.5"
      />
    </svg>
  );
};
export default SoilMoistureGlobal;
