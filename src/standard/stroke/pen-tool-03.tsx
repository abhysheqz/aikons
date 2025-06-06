import React from "react";
const PenTool_03: React.FC<
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
        d="M8.602 15.398 3 21m5-7c.042.471.181.982.6 1.4.418.419.929.558 1.4.6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9.5 10.5 7l2.796-3.196a1 1 0 0 1 1.46-.048l5.488 5.488a1 1 0 0 1-.048 1.46L17 13.5 14.5 20 3 21z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m10.5 7 6.5 6.5" />
    </svg>
  );
};
export default PenTool_03;
