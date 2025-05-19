import React from "react";
const AirplaneTakeOff_01: React.FC<
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
        d="M2 19h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.005 7.99 4.5 6.5a.01.01 0 0 1 .013.002l1.99 2.503 7.474-3.464c4-1.789 8.13 1.325 8.023 2.702-.056.254-.148.74-.783.932l-6.203 1.835-1.01 2.506-.006.005-4.452 1.472a.01.01 0 0 1-.013-.013l.967-2.968-6.492 1.505a.01.01 0 0 1-.012-.006l-1.995-5.51a.01.01 0 0 1 .004-.012Z"
      />
    </svg>
  );
};
export default AirplaneTakeOff_01;
