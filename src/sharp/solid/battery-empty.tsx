import React from "react";
const BatteryEmpty: React.FC<
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
        d="M1.25 6A.75.75 0 0 1 2 5.25h17a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.26 9.375a.75.75 0 0 1 .865-.615l3.625.613v5.254l-3.625.612a.75.75 0 1 1-.25-1.479l2.375-.4v-2.72l-2.375-.4a.75.75 0 0 1-.614-.865"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BatteryEmpty;
