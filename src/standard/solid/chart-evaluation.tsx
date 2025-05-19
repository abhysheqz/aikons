import React from "react";
const ChartEvaluation: React.FC<
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
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.555 3.168a1 1 0 0 1 .277 1.387l-2 3a1 1 0 0 1-1.664-1.11l2-3a1 1 0 0 1 1.387-.277m-3.518 5.488a1 1 0 0 1 .307 1.38l-3.5 5.5a1 1 0 0 1-1.444.264l-3.214-2.41-.952 1.224a1 1 0 1 1-1.579-1.228l1.556-2A1 1 0 0 1 10.6 11.2l3.136 2.352 2.92-4.589a1 1 0 0 1 1.38-.307M7.625 15.22a1 1 0 0 1 .156 1.406l-4 5a1 1 0 0 1-1.562-1.25l4-5a1 1 0 0 1 1.406-.156"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartEvaluation;
