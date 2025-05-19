import React from "react";
const FolderOpen: React.FC<
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
        d="M2.5 21.5v-16h5l2 2.5h9v3.5m-16 10 4-10h15l-4 10zM11.5 4.515c.915-1.23 2.166-1.96 4.012-2.013a4.1 4.1 0 0 1 1.756.353c1.307.571 2.15 1.301 2.732 2.645h.5l1-2.5"
      />
    </svg>
  );
};
export default FolderOpen;
