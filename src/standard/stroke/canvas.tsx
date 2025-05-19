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
        d="M18 2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.699 5.566c1.23-.176 3.268-.106 1.581 1.587-2.108 2.115-5.272 6.876-1.581 5.29 3.69-1.588 5.272-.53 3.69 1.057M12 17v3.5M5 22l2-5M19 22l-2-5"
      />
    </svg>
  );
};
export default Canvas;
