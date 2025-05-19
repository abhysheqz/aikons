import React from "react";
const Flag_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 14v7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.01 4.422v10.28c1.694-1.683 4.776-2.33 7.637-.788 2.861 1.54 6.224 1.201 8.35.19V4.04c-1.824.844-4.644 1.482-7.858 0a7.41 7.41 0 0 0-8.125.375.01.01 0 0 0-.004.008Z"
      />
    </svg>
  );
};
export default Flag_02;
