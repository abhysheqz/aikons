import React from "react";
const Minimize_02: React.FC<
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
        d="m7.871 12.831 2.134 1.83L12.67 4.444a1.72 1.72 0 0 1 3.337.829l-1.201 5.094 1.687.27c1.929.29 2.893.434 3.572.84C21.187 12.152 22 13.16 22 14.635c0 1.026-.254 1.715-.87 3.565L19.5 22.16H11L5.39 15.25A1.74 1.74 0 0 1 7.87 12.83Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M1.995 10.158 5.193 7.03m-3.198.125h2.992v3.002m5.018-7.993-2.846 2.84m-.156-2.838v2.996H9.99"
      />
    </svg>
  );
};
export default Minimize_02;
