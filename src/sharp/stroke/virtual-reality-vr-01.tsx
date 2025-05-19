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
      <path stroke="currentColor" strokeWidth={1.5} d="M15 13h4" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m22 9-4-5H6L2 9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.8 9H2.2a.2.2 0 0 0-.2.2v10.7a.1.1 0 0 0 .1.1H9l3-3 3 3h6.9a.1.1 0 0 0 .1-.1V9.2a.2.2 0 0 0-.2-.2Z"
      />
    </svg>
  );
};
export default VirtualRealityVr_01;
