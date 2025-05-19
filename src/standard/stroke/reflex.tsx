import React from "react";
const Reflex: React.FC<
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
        d="M15.937 10.5q.063-.467.063-.951C16 5.656 12.866 2.5 9 2.5S2 5.656 2 9.549C2 12.36 3.635 14.869 6 16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 22 5.926-10.484a2 2 0 0 1 1.74-1.016H22M3 22l3-.5M3 22l-1-2.5m20-9-2-2m2 2-2 2"
      />
    </svg>
  );
};
export default Reflex;
