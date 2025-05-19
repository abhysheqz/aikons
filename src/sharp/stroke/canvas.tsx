import React from "react";
const Canvas: React.FC<
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
        d="M20 2H4v14h16z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2 16h20" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.699 5.066c1.23-.176 3.268-.106 1.581 1.587-2.108 2.115-5.272 6.876-1.581 5.29 3.69-1.588 5.272-.53 3.69 1.057"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 16v5M5 22l3-6M19 22l-3-6"
      />
    </svg>
  );
};
export default Canvas;
