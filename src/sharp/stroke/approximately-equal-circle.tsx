import React from "react";
const ApproximatelyEqualCircle: React.FC<
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
        d="M7 9.285c1.667-2 3.333-1.414 5 .048 1.667 1.463 3.333 2.048 5 .049M7 14.618c1.667-2 3.333-1.414 5 .049s3.333 2.048 5 .048"
      />
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default ApproximatelyEqualCircle;
