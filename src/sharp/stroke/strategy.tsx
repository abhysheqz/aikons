import React from "react";
const Strategy: React.FC<
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
        strokeWidth={1.5}
        d="M17.5 11.5 21 8l-3.5-3.5M3 21S3 8.218 20.55 8.003"
      />
      <circle
        cx={5.5}
        cy={5.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m13 21 5-5m0 5-5-5" />
    </svg>
  );
};
export default Strategy;
