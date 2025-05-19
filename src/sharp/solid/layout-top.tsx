import React from "react";
const LayoutTop: React.FC<
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
        d="M2.25 8V3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v5zM21.75 10v11a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V10z"
      />
    </svg>
  );
};
export default LayoutTop;
