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
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 6A1.5 1.5 0 0 1 7 7.5v.006a1.5 1.5 0 0 1-3 0V7.5A1.5 1.5 0 0 1 5.5 6m6 0A1.5 1.5 0 0 1 13 7.5v.006a1.5 1.5 0 0 1-3 0V7.5A1.5 1.5 0 0 1 11.5 6m6 0A1.5 1.5 0 0 1 19 7.5v.006a1.5 1.5 0 0 1-3 0V7.5A1.5 1.5 0 0 1 17.5 6m-12 7.994a1.5 1.5 0 0 1 1.5 1.5v.006a1.5 1.5 0 0 1-3 0v-.006a1.5 1.5 0 0 1 1.5-1.5m6 0a1.5 1.5 0 0 1 1.5 1.5v.006a1.5 1.5 0 0 1-3 0v-.006a1.5 1.5 0 0 1 1.5-1.5m6 0a1.5 1.5 0 0 1 1.5 1.5v.006a1.5 1.5 0 0 1-3 0v-.006a1.5 1.5 0 0 1 1.5-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragDropHorizontal;
