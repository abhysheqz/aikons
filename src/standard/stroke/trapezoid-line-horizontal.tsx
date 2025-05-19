import React from "react";
const TrapezoidLineHorizontal: React.FC<
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
        d="M16.717 5.326 6.72 6.755a2 2 0 0 0-1.717 1.98L5 16.264a2 2 0 0 0 1.718 1.98l10 1.429A2 2 0 0 0 19 17.694V7.306a2 2 0 0 0-2.283-1.98M22 12.5H2"
      />
    </svg>
  );
};
export default TrapezoidLineHorizontal;
