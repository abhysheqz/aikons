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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.002 2v3m0 5v4m0 5v3M9 10a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1l6 .003a1 1 0 0 1 1 1V9a1 1 0 0 1-1 1zM5 19a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1l14 .003a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1z"
      />
    </svg>
  );
};
export default AlignHorizontalCenter;
