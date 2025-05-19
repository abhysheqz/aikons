import React from "react";
const DragDrop: React.FC<
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
        d="M4 6.5A1.5 1.5 0 0 1 5.5 5h.006a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 6.5m5.997 0a1.5 1.5 0 0 1 1.5-1.5h.006a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1-1.5-1.5m5.997 0a1.5 1.5 0 0 1 1.5-1.5h.006a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1-1.5-1.5M4 12.5A1.5 1.5 0 0 1 5.5 11h.006a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 12.5m5.997 0a1.5 1.5 0 0 1 1.5-1.5h.006a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1-1.5-1.5m5.997 0a1.5 1.5 0 0 1 1.5-1.5h.006a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1-1.5-1.5M4 18.5A1.5 1.5 0 0 1 5.5 17h.006a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 18.5m5.997 0a1.5 1.5 0 0 1 1.5-1.5h.006a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1-1.5-1.5m5.997 0a1.5 1.5 0 0 1 1.5-1.5h.006a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1-1.5-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragDrop;
