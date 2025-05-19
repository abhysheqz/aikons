import React from "react";
const ArrowAllDirection: React.FC<
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
      <path fill="currentColor" d="M12.751 9V4h-1.5v5z" />
      <path stroke="currentColor" strokeWidth={1.5} d="m15.001 6-3-3-3 3" />
      <path fill="currentColor" d="M11.251 15v5h1.5v-5z" />
      <path stroke="currentColor" strokeWidth={1.5} d="m15.001 18-3 3-3-3" />
      <path fill="currentColor" d="M15 12.75h5v-1.5h-5z" />
      <path stroke="currentColor" strokeWidth={1.5} d="m18 15 3-3-3-3" />
      <path fill="currentColor" d="M9 11.25H4v1.5h5z" />
      <path stroke="currentColor" strokeWidth={1.5} d="m6 15-3-3 3-3" />
    </svg>
  );
};
export default ArrowAllDirection;
