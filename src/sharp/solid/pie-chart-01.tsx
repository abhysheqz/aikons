import React from "react";
const PieChart_01: React.FC<
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
        d="m15.333 1.25.723.263a10.78 10.78 0 0 1 6.43 6.43l.264.723-11.158 3.742z"
      />
      <path
        fill="currentColor"
        d="m21.533 10.39-11.926 4 3.999-11.925a10.3 10.3 0 0 0-2.106-.217c-5.66 0-10.25 4.59-10.25 10.25s4.59 10.25 10.25 10.25 10.25-4.589 10.25-10.25q-.002-1.086-.217-2.108"
      />
    </svg>
  );
};
export default PieChart_01;
