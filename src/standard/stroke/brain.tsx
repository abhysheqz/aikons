import React from "react";
const Brain: React.FC<
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
        d="M12 19.778a2.222 2.222 0 0 0 4.388.5q.298.055.612.055a3.333 3.333 0 0 0 3.059-4.66A4.44 4.44 0 0 0 22 12a4.44 4.44 0 0 0-1.941-3.673 3.333 3.333 0 0 0-3.67-4.604 2.223 2.223 0 0 0-4.389.5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19.778a2.222 2.222 0 0 1-4.388.5 3.333 3.333 0 0 1-3.67-4.604A4.44 4.44 0 0 1 2 11.999a4.44 4.44 0 0 1 1.941-3.673 3.333 3.333 0 0 1 3.67-4.604 2.223 2.223 0 0 1 4.389.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 9a3 3 0 0 1-3-3M9 15a3 3 0 0 1 3 3M9 9a3 3 0 0 0 3-3M15 15a3 3 0 0 0-3 3"
      />
    </svg>
  );
};
export default Brain;
