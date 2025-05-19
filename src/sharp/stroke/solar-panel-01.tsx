import React from "react";
const SolarPanel_01: React.FC<
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
        d="M22 15.835 19 3.997H5L2 15.835z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15.835v3.946m0 0h3m-3 0H9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.31 9.947h17.122M13.965 3.778l2.062 12.004M10.132 4.037 7.954 15.955"
      />
    </svg>
  );
};
export default SolarPanel_01;
