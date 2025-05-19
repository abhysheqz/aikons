import React from "react";
const ChartDecrease: React.FC<
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
        d="M6 6a1 1 0 0 1 1-1c1.86 0 4.722.394 7.144 2.124 1.873 1.338 3.4 3.415 4.036 6.517l1.21-.135a1 1 0 0 1 .89 1.619l-2 2.5a1 1 0 0 1-1.405.156l-2.5-2a1 1 0 0 1 .515-1.775l1.293-.144c-.562-2.54-1.81-4.117-3.202-5.11C11.028 7.355 8.64 7 7 7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartDecrease;
