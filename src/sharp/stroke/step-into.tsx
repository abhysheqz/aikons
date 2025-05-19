import React from "react";
const StepInto: React.FC<
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
        d="M3 19.977h6M15 19.977h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.008 3.976h8.916a.1.1 0 0 1 .1.1v12.247m2.974-2.334-2.974 2.988-3.017-2.988"
      />
    </svg>
  );
};
export default StepInto;
