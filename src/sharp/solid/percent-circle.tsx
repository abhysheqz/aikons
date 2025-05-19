import React from "react";
const PercentCircle: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m6-3a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m6 6a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m-4.543 1.707 8-8-1.414-1.414-8 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PercentCircle;
