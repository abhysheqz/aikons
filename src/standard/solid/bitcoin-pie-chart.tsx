import React from "react";
const BitcoinPieChart: React.FC<
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
        d="M11.012 1C5.418 1.385 1 6.045 1 11.737 1 17.681 5.819 22.5 11.763 22.5c2.702 0 5.171-.996 7.061-2.64l-3.2-3.199a6.258 6.258 0 1 1-4.613-11.137z"
      />
      <path
        fill="currentColor"
        d="M12.514 5.524a6.26 6.26 0 0 1 5.462 5.462H22.5A10.765 10.765 0 0 0 12.514 1zM22.5 12.488h-4.524a6.23 6.23 0 0 1-1.29 3.111l3.2 3.2a10.7 10.7 0 0 0 2.614-6.311"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.188 14.417V9.083m1.562 0V7.75m0 8v-1.333m-1.562-2.667h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.25m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.25"
      />
    </svg>
  );
};
export default BitcoinPieChart;
