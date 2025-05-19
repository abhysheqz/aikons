import React from "react";
const AlignHorizontalCenter: React.FC<
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
        d="M11.752 2a1 1 0 0 1 1 1v18a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1"
      />
      <path
        fill="currentColor"
        d="M7 6c0-.966.784-1.75 1.75-1.75l6 .003c.967 0 1.75.784 1.75 1.75V9a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 7 9zM3 15c0-.967.784-1.75 1.75-1.75l14 .003c.967 0 1.75.784 1.75 1.75V18a1.75 1.75 0 0 1-1.75 1.75h-14A1.75 1.75 0 0 1 3 18z"
      />
    </svg>
  );
};
export default AlignHorizontalCenter;
