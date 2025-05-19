import React from "react";
const Mentor: React.FC<
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
        d="M22 20.983h-8a4 4 0 0 1 4-3.996c2.21 0 4 1.79 4 3.996ZM20 12.491a2 2 0 1 1-3.998-.002 2 2 0 0 1 3.998.002ZM7 9.494v6.494H2V9.494zm0 0h5M6.5 4.998a2 2 0 1 1-3.998-.002 2 2 0 0 1 3.998.002Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.004 6.006h5.985M9.033 2.982H18"
      />
    </svg>
  );
};
export default Mentor;
