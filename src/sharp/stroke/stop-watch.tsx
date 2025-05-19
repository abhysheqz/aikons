import React from "react";
const StopWatch: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 5.5 19.5 4m-15 0L6 5.5"
      />
      <circle
        cx={12}
        cy={13}
        r={9}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 8.5v5l2.5 2.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3.5V2M9 2h6"
      />
    </svg>
  );
};
export default StopWatch;
