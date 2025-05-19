import React from "react";
const Pokemon: React.FC<
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
        d="M12 21c4.418 0 8-1.79 8-4 0-.977-.84-1.532-1.052-2.411-.12-.496.052-1.078.052-1.589 0-1.136 0-2-1-3 1.877-1.63 4-3.5 4-7-4.5 0-6.356 2.627-7 4q-3-1.5-6 0c-.5-1.5-2-4-7-4 0 3.5 2.249 5.658 4 7-1 1-1 1.864-1 3 0 .511.172 1.093.053 1.589C4.84 15.468 4 16.023 4 17c0 2.21 3.582 4 8 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.5 16 .39.26a2 2 0 0 0 2.22 0l.39-.26"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.009 12.5H9m6 0h-.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 14c-1.17.408-2 1.445-2 2.66 0 .97.53 1.827 1.34 2.34"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 14c1.423.306 3.329 2.611.66 5"
      />
    </svg>
  );
};
export default Pokemon;
