import React from "react";
const NThRoot: React.FC<
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
        d="M22 7.063H12L7.5 21.248 4 15.168l-2 2.027"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.004 9.09V5.268m0 0V2.25m0 3.018c.228-1.404 1.378-2.272 2.511-2.272 1.31 0 2.488 1.214 2.488 2.522v3.568"
      />
    </svg>
  );
};
export default NThRoot;
