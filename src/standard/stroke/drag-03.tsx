import React from "react";
const Drag_03: React.FC<
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
        d="m7.871 12.671 2.134 1.829V4.75a1.75 1.75 0 1 1 3.5 0V11H18a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-6.93a2 2 0 0 1-1.664-.89L5.39 15.088a1.74 1.74 0 0 1 2.482-2.417M20.5 4l-2 2m2-2s-1.494-1.607-2-2m2 2h-4M3 4l2-2M3 4l2 2M3 4h4"
      />
    </svg>
  );
};
export default Drag_03;
