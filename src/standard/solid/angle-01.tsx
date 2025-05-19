import React from "react";
const Angle_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M18.607 3.269a1 1 0 0 1 .05 1.413l-8.855 9.492c1.17 1.215 1.943 2.928 2.145 4.826H21a1 1 0 1 1 0 2H3a1 1 0 0 1-.731-1.682l14.925-16a1 1 0 0 1 1.413-.05"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Angle_01;
