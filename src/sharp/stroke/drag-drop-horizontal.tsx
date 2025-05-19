import React from "react";
const DragDropHorizontal: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M18 8v.006M12 8v.006M6 8v.006m12 7.988V16m-6-.006V16m-6-.006V16"
      />
    </svg>
  );
};
export default DragDropHorizontal;
