import React from "react";
const Filter: React.FC<
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
        d="M2.47 2.47A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v4.351l-6.048 5.04-1.015 7.104-4.352 2.176a.75.75 0 0 1-1.08-.588l-.967-8.7L2.25 7.35l-.001-4.35a.75.75 0 0 1 .22-.531"
      />
    </svg>
  );
};
export default Filter;
