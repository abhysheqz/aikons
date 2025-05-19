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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 3H3v7h7zM14 10h7V9l-3-6h-1l-3 6z"
      />
      <circle
        cx={6.5}
        cy={17.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 14.5 20 20m.5-5v5.5H15"
      />
    </svg>
  );
};
export default ShapeCollection;
