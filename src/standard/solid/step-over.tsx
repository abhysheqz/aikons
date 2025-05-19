import React from "react";
const StepOver: React.FC<
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
        d="M6.5 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M6.5 5a2 2 0 0 0-2 2v10.417a1 1 0 1 1-2 0V7a4 4 0 0 1 4-4h8.421a4 4 0 0 1 4 4.004l-.007 7.266H20.5a1 1 0 0 1 .726 1.688l-2.589 2.73a1 1 0 0 1-1.455-.003l-2.562-2.73a1 1 0 0 1 .729-1.685h1.565l.007-7.268a2 2 0 0 0-2-2.002z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StepOver;
