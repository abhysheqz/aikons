import React from "react";
const WifiOff_01: React.FC<
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
        d="M8.5 14.5c1.121-1.106 2.464-1.613 4-1.479M18.5 11.5c-1.493-1.32-3.215-2.226-5-2.5M5.5 11.5c1.093-.911 2.278-1.587 3.5-2M22 8.5c-3.928-3.317-8.264-4.571-12.5-3.762M2 8.5c1.224-1.034 2.5-2 3.5-2.5"
      />
      <circle
        cx={12}
        cy={18}
        r={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default WifiOff_01;
