import React from "react";
const PointingLeft_07: React.FC<
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
        d="M12.421 15.818H10.5q-.264-.001-.5-.085m2.974 3.176H11.5q-.264-.001-.5-.085m-2-6.097h2.421m-2.421 0v1.591a1.5 1.5 0 0 0 1 1.415m-1-3.006H3.579c-.872 0-1.579-.692-1.579-1.545 0-.854.707-1.546 1.579-1.546h10.487l-1.711-1.669a1.71 1.71 0 0 1 .146-2.586 1.816 1.816 0 0 1 2.182-.033L22 9.636V19a3 3 0 0 1-3 3h-6.5a1.5 1.5 0 0 1-1.5-1.5v-1.676m-1-3.091v1.676a1.5 1.5 0 0 0 1 1.415M8 4.5H2.715M4.5 2 2 4.5 4.5 7"
      />
    </svg>
  );
};
export default PointingLeft_07;
