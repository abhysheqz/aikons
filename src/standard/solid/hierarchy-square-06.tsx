import React from "react";
const HierarchySquare_06: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 15 7.75h-2v1.657a3.25 3.25 0 0 1 2.245 2.909l4.88 3.903-.025.031h.9c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 21 22.75h-3A1.75 1.75 0 0 1 16.25 21v-3c0-.679.387-1.268.952-1.558l-2.56-2.048A3.25 3.25 0 0 1 12 15.75a3.25 3.25 0 0 1-2.642-1.356l-2.56 2.048c.565.29.952.879.952 1.558v3A1.75 1.75 0 0 1 6 22.75H3A1.75 1.75 0 0 1 1.25 21v-3c0-.966.784-1.75 1.75-1.75h.9l-.025-.03 4.88-3.905A3.25 3.25 0 0 1 11 9.407V7.75H9A1.75 1.75 0 0 1 7.25 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_06;
