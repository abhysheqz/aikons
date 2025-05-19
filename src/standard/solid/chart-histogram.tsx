import React from "react";
const ChartHistogram: React.FC<
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
        d="M13 9a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1m-5 3a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M12.993 6C11.893 6 11 6.892 11 7.987a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h6.127A4 4 0 0 1 12.993 4a4.01 4.01 0 0 1 3.88 2.998l4.124-.011a1 1 0 1 1 .006 2l-5 .013A1 1 0 0 1 15 8c0-1.102-.9-2-2.007-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartHistogram;
