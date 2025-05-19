import React from "react";
const Medal_03: React.FC<
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
        d="m16 15-4-2-4 2v5l4 2 4-2zM12 2v4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 2.01A.01.01 0 0 1 4.01 2h15.98a.01.01 0 0 1 .01.01V7l-8 3.5L4 7z"
      />
    </svg>
  );
};
export default Medal_03;
