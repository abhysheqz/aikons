import React from "react";
const LayoutBottom: React.FC<
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
        d="M2.25 16v5c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-5zM21.75 14V3a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75v11z"
      />
    </svg>
  );
};
export default LayoutBottom;
