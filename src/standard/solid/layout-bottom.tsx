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
        d="M22.5 14V5.5a4 4 0 0 0-4-4h-13a4 4 0 0 0-4 4V14zM1.5 16v2.5a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V16z"
      />
    </svg>
  );
};
export default LayoutBottom;
