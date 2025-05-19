import React from "react";
const Share_06: React.FC<
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
        d="M19 13a8 8 0 1 1-8-8M14 3h4c1.414 0 2.121 0 2.56.44C21 3.878 21 4.585 21 6v4m-1-6-9 9"
      />
    </svg>
  );
};
export default Share_06;
