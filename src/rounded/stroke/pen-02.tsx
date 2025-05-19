import React from "react";
const Pen_02: React.FC<
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
        d="m3 21 .858-3.002a2 2 0 0 1 .508-.864l13.84-13.841a1 1 0 0 1 1.414 0l1.086 1.086a1 1 0 0 1 0 1.414l-13.84 13.84a2 2 0 0 1-.864.51z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 5.499 2.379 2.378c1 1 1.5 1.5 1.5 2.122 0 .62-.5 1.12-1.5 2.12l-.88.88M8.5 12.999l2.5 2.5"
      />
    </svg>
  );
};
export default Pen_02;
