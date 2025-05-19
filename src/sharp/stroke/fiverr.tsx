import React from "react";
const Fiverr: React.FC<
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
        strokeWidth={1.5}
        d="M7 2h8.53v3.5H11v3h9V22h-4.47V12H11v10H7V12H4V8.5h3z"
      />
    </svg>
  );
};
export default Fiverr;
