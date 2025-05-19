import React from "react";
const BatteryLow: React.FC<
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
        d="M1.25 6A.75.75 0 0 1 2 5.25h17a.75.75 0 0 1 .75.75v2.866l3 .507v5.254l-3 .507V18a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm18.5 7.613v-3.226l1.5.254v2.719zM5.25 9v6h1.5V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BatteryLow;
