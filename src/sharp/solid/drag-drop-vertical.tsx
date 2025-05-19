import React from "react";
const DragDropVertical: React.FC<
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
        d="M6.25 4.25h3.506v3.5H6.25zm7.994 0h3.506v3.5h-3.506zm-7.994 6h3.506v3.5H6.25zm7.994 0h3.506v3.5h-3.506zm-7.994 6h3.506v3.5H6.25zm7.994 0h3.506v3.5h-3.506z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragDropVertical;
