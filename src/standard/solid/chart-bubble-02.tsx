import React from "react";
const ChartBubble_02: React.FC<
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
        d="M1 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M4 17.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M11 6.75a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartBubble_02;
