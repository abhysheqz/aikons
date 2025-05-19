import React from "react";
const ShapeCollection: React.FC<
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
        d="M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M14.809 10h5.382a.81.81 0 0 0 .724-1.17l-2.691-5.383a.809.809 0 0 0-1.448 0l-2.69 5.382A.81.81 0 0 0 14.808 10"
      />
      <circle
        cx={6.5}
        cy={17.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 14.5 20 20m.5-5v5.5H15"
      />
    </svg>
  );
};
export default ShapeCollection;
