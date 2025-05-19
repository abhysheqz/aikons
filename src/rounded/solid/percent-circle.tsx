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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.707 6.043a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0M7.25 9a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M15 13.078a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PercentCircle;
