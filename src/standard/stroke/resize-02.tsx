import React from "react";
const Resize_02: React.FC<
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
        d="m16.5 4.004 1.999 2m-2-2 2-2m-2 2h3.997M7 4 5.001 2M7 4 5.001 6M7 4H3M7.871 12.671l2.134 1.829V4.75a1.75 1.75 0 1 1 3.5 0V11H18a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-6.93a2 2 0 0 1-1.664-.89L5.39 15.088a1.74 1.74 0 0 1 2.482-2.417"
      />
    </svg>
  );
};
export default Resize_02;
