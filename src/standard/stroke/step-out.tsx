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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21h5M15 21h6M12 18V8.51a2 2 0 0 1 2-2h6.141M18.507 4 21 6.51 18.506 9"
      />
    </svg>
  );
};
export default StepOut;
