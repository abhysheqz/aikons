import React from "react";
const ArrowDown_02: React.FC<
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
        d="m18 14.527-1.414-1.408L13 16.689V3.5h-2v13.189l-3.587-3.57L6 14.527l6 5.973z"
      />
    </svg>
  );
};
export default ArrowDown_02;
