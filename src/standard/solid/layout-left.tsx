import React from "react";
const LayoutLeft: React.FC<
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
        d="M10 22.5h8.5a4 4 0 0 0 4-4v-13a4 4 0 0 0-4-4H10zM8 1.5H5.5a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4H8z"
      />
    </svg>
  );
};
export default LayoutLeft;
