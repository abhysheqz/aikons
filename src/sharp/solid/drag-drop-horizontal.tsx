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
        d="M7.75 6.25v3.506h-3.5V6.25zm6 0v3.506h-3.5V6.25zm6 0v3.506h-3.5V6.25zm-12 7.994v3.506h-3.5v-3.506zm6 0v3.506h-3.5v-3.506zm6 0v3.506h-3.5v-3.506z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragDropHorizontal;
