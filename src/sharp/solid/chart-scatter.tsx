import React from "react";
const ChartScatter: React.FC<
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
        d="M17.371 9.625h2.01v2h-2.01zM19.371 2.625h2.01v2h-2.01zM10.371 4.625h2.01v2h-2.01zM10.371 9.625h2.01v2h-2.01zM8.371 14.625h2.01v2H8.37z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 19.5v-17h-2v18a1 1 0 0 0 1 1h18v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartScatter;
