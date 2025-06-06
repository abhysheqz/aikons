import React from "react";
const RiceBowl_02: React.FC<
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
        d="m6 9 .73-1.113c1.845-2.809 2.767-4.213 3.954-4.652a3.8 3.8 0 0 1 2.632 0c1.187.439 2.109 1.843 3.953 4.652L18 9M18.726 20.305C17.623 21 15.749 21 12 21s-5.623 0-6.726-.695c-1.48-.933-2.35-2.652-2.264-4.47 0 0-.204-2.481 1.265-4.835.84 1.634 3.644 4.16 6.226 6.168m8.225 3.137c1.48-.933 2.35-2.652 2.264-4.47 0 0 .204-2.481-1.265-4.835-1.409 2.075-6.026 6.214-9.224 6.168m8.225 3.137c-3.235-.077-6.015-1.418-8.225-3.137"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.509 11.5H14.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 7c.167.333.8 1 2 1M10 11l-.5.5"
      />
    </svg>
  );
};
export default RiceBowl_02;
