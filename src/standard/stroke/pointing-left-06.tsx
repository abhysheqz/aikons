import React from "react";
const PointingLeft_06: React.FC<
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
        d="M22 20.001h-1.5l-1.404 1.124a4 4 0 0 1-2.5.876H12.5a2 2 0 0 1-2-2v-1m11.5-9h-1.5l-4.656-3.387a3.21 3.21 0 0 0-4.303.482L9 10.002m-.5 3h-5a1.5 1.5 0 0 1 0-3H9m-.5 3h2m-2 0v1a2 2 0 0 0 2 2h1m1 3h-1a2 2 0 0 1-2-2v-1m4-6H9M8 4.5H2.824M4.5 2 2 4.5 4.5 7"
      />
    </svg>
  );
};
export default PointingLeft_06;
