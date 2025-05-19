import React from "react";
const Layers_02: React.FC<
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
        d="M10 2.75c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75h-9A1.75 1.75 0 0 1 10 11.75z"
      />
      <path
        fill="currentColor"
        d="M8.75 5.5h-1.5A1.75 1.75 0 0 0 5.5 7.25v9c0 .966.784 1.75 1.75 1.75h9A1.75 1.75 0 0 0 18 16.25v-1.5h-6.25a3 3 0 0 1-3-3z"
      />
      <path
        fill="currentColor"
        d="M4.25 10h-1.5A1.75 1.75 0 0 0 1 11.75v9c0 .966.784 1.75 1.75 1.75h9a1.75 1.75 0 0 0 1.75-1.75v-1.5H7.25a3 3 0 0 1-3-3z"
      />
    </svg>
  );
};
export default Layers_02;
