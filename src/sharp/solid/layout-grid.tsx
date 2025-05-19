import React from "react";
const LayoutGrid: React.FC<
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
        d="M11 2.25V11H2.25V3A.75.75 0 0 1 3 2.25zM13 2.25V11h8.75V3a.75.75 0 0 0-.75-.75zM21.75 13H13v8.75h8a.75.75 0 0 0 .75-.75zM11 21.75V13H2.25v8c0 .414.336.75.75.75z"
      />
    </svg>
  );
};
export default LayoutGrid;
