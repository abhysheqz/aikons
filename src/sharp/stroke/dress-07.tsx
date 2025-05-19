import React from "react";
const Dress_07: React.FC<
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
        strokeWidth={1.5}
        d="M10.132 12.244c.67-.366 1.256-.219 1.607.016l.259.145.259-.145c.351-.235.936-.382 1.607-.016.88.48 1.079 2.065-.95 3.403-.387.254-.58.382-.916.382-.335 0-.529-.128-.915-.383-2.03-1.337-1.83-2.922-.95-3.402Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.993 6.472c-1.4 1.854-1.117 4.658-.273 8.27.412 2.238 1.025 4.508 1.28 5.962-2.702 1.355-9.438 2.06-14 0 .351-2.06.98-4.385 1.45-6.61.614-2.909 1.023-5.638-.45-7.629"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.44 7.973 2.04 1.55a.01.01 0 0 0 .014-.001l2.504-3.502a.01.01 0 0 0 0-.013L18.506 2.48l-.006-.003-2.992-.475-.008.003L12.007 5 8.525 2.005l-.008-.003-3.01.496-.005.003-3.499 3.485a.01.01 0 0 0-.001.013l2.488 3.52a.01.01 0 0 0 .015.003l1.951-1.491"
      />
    </svg>
  );
};
export default Dress_07;
