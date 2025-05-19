import React from "react";
const PointingRight_07: React.FC<
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
        strokeWidth={1.5}
        d="M11.579 15.818H13.5q.264-.001.5-.085m-2.974 3.176H12.5q.264-.001.5-.085m2-6.097h-2.421m2.421 0v1.591a1.5 1.5 0 0 1-1 1.415m1-3.006h5.421c.872 0 1.579-.692 1.579-1.545 0-.854-.707-1.546-1.579-1.546H9.934l1.711-1.669a1.71 1.71 0 0 0-.146-2.586 1.816 1.816 0 0 0-2.182-.033L2 9.636V19a3 3 0 0 0 3 3h6.5a1.5 1.5 0 0 0 1.5-1.5v-1.676m1-3.091v1.676a1.5 1.5 0 0 1-1 1.415M16 4.5h5.36M19.5 2 22 4.5 19.5 7"
      />
    </svg>
  );
};
export default PointingRight_07;
