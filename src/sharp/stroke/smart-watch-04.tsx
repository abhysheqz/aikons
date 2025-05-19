import React from "react";
const SmartWatch_04: React.FC<
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
        d="m9 9 4.5 4.5M16 8l-5.5 5.5M19.5 19.5v-15h-15v15z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 22h8M8 2h8" />
    </svg>
  );
};
export default SmartWatch_04;
