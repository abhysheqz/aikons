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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 20h6M15 20h6M3 4h6.523a2 2 0 0 1 2 2v10.214M14 14.524l-2.477 2.477L9 14.524"
      />
    </svg>
  );
};
export default StepInto;
