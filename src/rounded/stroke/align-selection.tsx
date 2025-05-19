import React from "react";
const AlignSelection: React.FC<
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
        d="M20 6v12M18 4H6m12 16H6m-2-2V6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default AlignSelection;
