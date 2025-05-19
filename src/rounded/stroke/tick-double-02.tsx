import React from "react";
const TickDouble_02: React.FC<
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
        d="M2.5 13.833 6 17.5l1.024-1.073M16.5 6.5l-6.063 6.352M7.5 13.833 11 17.5l10.5-11"
      />
    </svg>
  );
};
export default TickDouble_02;
