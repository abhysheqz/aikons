import React from "react";
const CircleArrowDataTransferDiagonal: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.69 8-4.813 5.107c-.392.416-.588.624-.744.562s-.143-.342-.118-.904l.081-1.772M10.31 16l4.813-5.107c.392-.416.588-.624.744-.562s.143.342.117.904l-.08 1.772"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default CircleArrowDataTransferDiagonal;
