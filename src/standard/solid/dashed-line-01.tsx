import React from "react";
const DashedLine_01: React.FC<
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
        d="M1 12a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m5.5 0a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H7.5a1 1 0 0 1-1-1m5.5 0a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m5.5 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-2.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashedLine_01;
