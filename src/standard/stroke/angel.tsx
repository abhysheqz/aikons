import React from "react";
const Angel: React.FC<
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
        d="M3.078 7.5A9.9 9.9 0 0 0 2 12.015C2 17.529 6.477 22 12 22s10-4.47 10-9.985A9.9 9.9 0 0 0 20.922 7.5"
      />
      <ellipse
        cx={12}
        cy={4}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={10}
        ry={2}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2M7 10.5a1.5 1.5 0 0 1 3 0m4 0a1.5 1.5 0 0 1 3 0"
      />
    </svg>
  );
};
export default Angel;
