import React from "react";
const Option: React.FC<
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
        d="M4 5h1.044c1.918 0 2.878 0 3.63.495.75.496 1.129 1.378 1.885 3.141l2.883 6.728c.755 1.763 1.133 2.645 1.885 3.14.751.496 1.71.496 3.63.496H20M14 5h6"
      />
    </svg>
  );
};
export default Option;
