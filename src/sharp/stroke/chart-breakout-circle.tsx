import React from "react";
const ChartBreakoutCircle: React.FC<
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
        d="M16 4V2m3 2.993 1.608-1.608M20 8h2M20 13a9 9 0 1 1-9-9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.465 15.017c2.807-.077 8.504-1.036 12.23-5.608m-3.71-.403h4.027v3.969"
      />
    </svg>
  );
};
export default ChartBreakoutCircle;
