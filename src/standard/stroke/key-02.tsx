import React from "react";
const Key_02: React.FC<
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
        d="m9.744 8.895.457.969a1 1 0 0 1-.198 1.133l-7.21 7.21a1 1 0 0 0-.293.708V21.5h3v-2h2v-2h2l3.503-3.504a1 1 0 0 1 1.133-.197l.97.456a3.02 3.02 0 0 0 3.32-.64l2.21-2.209c.836-.836 1.132-2.098.59-3.15-1.26-2.449-3.034-4.222-5.483-5.483-1.052-.542-2.314-.246-3.15.59l-2.21 2.21a3.02 3.02 0 0 0-.64 3.32M17 7l-1 1"
      />
    </svg>
  );
};
export default Key_02;
