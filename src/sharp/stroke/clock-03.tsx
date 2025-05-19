import React from "react";
const Clock_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 8.454h2.962C19.662 3.704 14.497 1 9.46 2.344 4.096 3.778.91 9.262 2.343 14.595c1.434 5.332 6.945 8.494 12.31 7.061A10.04 10.04 0 0 0 22 13.485"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 7v5l2.5 2.5" />
    </svg>
  );
};
export default Clock_03;
