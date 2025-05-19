import React from "react";
const StepOut: React.FC<
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
        d="M2 21a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M14 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M18.125 3.076a1 1 0 0 1 1.09.22l2.494 2.508a1 1 0 0 1-.002 1.413l-2.494 2.49A1 1 0 0 1 17.506 9V7.51H14a1 1 0 0 0-1 1V18a1 1 0 1 1-2 0V8.51a3 3 0 0 1 3-3h3.506V4a1 1 0 0 1 .62-.924"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StepOut;
