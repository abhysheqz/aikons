import React from "react";
const Rhombus: React.FC<
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
        d="M19.796 13.338a2 2 0 0 0 0-2.676l-6.31-7.01a2 2 0 0 0-2.973 0l-6.309 7.01a2 2 0 0 0 0 2.676l6.31 7.01a2 2 0 0 0 2.973 0z"
      />
    </svg>
  );
};
export default Rhombus;
