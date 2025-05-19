import React from "react";
const LayoutColumn_3: React.FC<
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
        d="M16.5 22.5h2a4 4 0 0 0 4-4v-13a4 4 0 0 0-4-4h-2zM14.5 1.5h-5v21h5zM5.5 1.5h2v21h-2a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4"
      />
    </svg>
  );
};
export default LayoutColumn_3;
