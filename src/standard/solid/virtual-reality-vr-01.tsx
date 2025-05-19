import React from "react";
const VirtualRealityVr_01: React.FC<
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
        fillRule="evenodd"
        d="M5.004 8.326a3.75 3.75 0 0 0-3.75 3.75v5a3.75 3.75 0 0 0 3.75 3.75h3.095a3.75 3.75 0 0 0 2.88-1.35l1.025-1.228 1.024 1.229a3.75 3.75 0 0 0 2.881 1.35h3.095a3.75 3.75 0 0 0 3.75-3.75v-5a3.75 3.75 0 0 0-3.75-3.75zm11 3.75a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.809 5.174a1 1 0 0 0-.864.496l-2.29 3.926a3 3 0 0 0-.409 1.512v.87a1 1 0 1 1-2 0v-.87a5 5 0 0 1 .681-2.52l2.29-3.926A3 3 0 0 1 6.81 3.174h10.384a3 3 0 0 1 2.591 1.488l2.29 3.927a5 5 0 0 1 .682 2.52v.869a1 1 0 1 1-2 0v-.87a3 3 0 0 0-.409-1.512l-2.29-3.926a1 1 0 0 0-.864-.496z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VirtualRealityVr_01;
