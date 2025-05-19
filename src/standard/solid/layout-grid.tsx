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
        d="M11 1.5V11H1.5V5.5a4 4 0 0 1 4-4zM13 1.5V11h9.5V5.5a4 4 0 0 0-4-4zM22.5 13H13v9.5h5.5a4 4 0 0 0 4-4zM11 22.5V13H1.5v5.5a4 4 0 0 0 4 4z"
      />
    </svg>
  );
};
export default LayoutGrid;
