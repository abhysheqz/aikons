import React from "react";
const Signal: React.FC<
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
        strokeDasharray="3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.036 21.929c5.503 0 9.964-4.462 9.964-9.965S17.539 2 12.036 2 2.07 6.461 2.07 11.964c0 1.815-.35 3.517.499 4.982L2.07 21.93l4.983-.499c1.465.848 3.167.499 4.982.499"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19a7 7 0 1 0-7-7c0 1.275.404 2.47 1 3.5L5 19l3.5-1c1.03.596 2.225 1 3.5 1"
      />
    </svg>
  );
};
export default Signal;
