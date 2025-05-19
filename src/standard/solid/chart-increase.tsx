import React from "react";
const ChartIncrease: React.FC<
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
        d="M16.875 5.22a1 1 0 0 1 1.332.073l2 2A1 1 0 0 1 19.5 9h-1.235c-.55 3.283-2.022 5.47-3.923 6.868C11.97 17.612 9.096 18 7 18a1 1 0 1 1 0-2c1.904 0 4.28-.362 6.158-1.743C14.523 13.253 15.72 11.64 16.234 9H15a1 1 0 0 1-.625-1.78z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartIncrease;
