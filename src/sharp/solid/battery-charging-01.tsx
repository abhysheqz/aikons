import React from "react";
const BatteryCharging_01: React.FC<
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
        d="M1.25 6A.75.75 0 0 1 2 5.25h17a.75.75 0 0 1 .75.75v2.866l3 .507v5.254l-3 .507V18a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm18.5 7.613v-3.226l1.5.254v2.718zm-8.1-4.741-1.302-.744-2.641 4.622h3l-1.359 2.378 1.303.744 2.641-4.622h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BatteryCharging_01;
