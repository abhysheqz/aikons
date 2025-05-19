import React from "react";
const SmartPhone_03: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 15 6 13.5 4.5 12 6 10.5 4.5 9M19.5 15 18 13.5l1.5-1.5-1.5-1.5L19.5 9M14 2h-4l.5 1h3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 6.5v-3A1.5 1.5 0 0 0 17 2H7a1.5 1.5 0 0 0-1.5 1.5v3m0 11v3A1.5 1.5 0 0 0 7 22h10a1.5 1.5 0 0 0 1.5-1.5v-3"
      />
    </svg>
  );
};
export default SmartPhone_03;
