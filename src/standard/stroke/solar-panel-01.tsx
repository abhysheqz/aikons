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
        d="M20.72 16a1 1 0 0 0 .97-1.242l-2.5-10A1 1 0 0 0 18.22 4H5.78a1 1 0 0 0-.97.757l-2.5 10A1 1 0 0 0 3.28 16zM12 16v4m0 0h3m-3 0H9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 10h17M13.957 4 16 15.83M10.159 4.254 8 16"
      />
    </svg>
  );
};
export default SolarPanel_01;
