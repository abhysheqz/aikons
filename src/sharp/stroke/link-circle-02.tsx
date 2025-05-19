import React from "react";
const LinkCircle_02: React.FC<
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
        strokeWidth={1.5}
        d="M21 12a9 9 0 1 1-9-9M11.005 13.004l9.466-9.474M21 8.992V3h-5.99"
      />
    </svg>
  );
};
export default LinkCircle_02;
