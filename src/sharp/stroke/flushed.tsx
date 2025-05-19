import React from "react";
const Flushed: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9 16h6"
      />
    </svg>
  );
};
export default Flushed;
