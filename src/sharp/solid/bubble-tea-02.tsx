import React from "react";
const BubbleTea_02: React.FC<
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
        fillRule="evenodd"
        d="M7.33 4.665A.75.75 0 0 1 8 4.25h8a.75.75 0 0 1 .67.415l2 4-1.34.67-1.793-3.585H8.464L6.67 9.335l-1.342-.67z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 9.75H4v-1.5h16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 1.25v8h-1.5v-8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.746 8.914.323 2.798q.25-.111.525-.2c.732-.239 1.69-.384 2.556-.125.454.136.998.413 1.518.678l.137.07c.595.302 1.215.61 1.847.827 1.196.412 2.265.454 3.177-.348l.427-3.7 1.49.172-1.5 13a.75.75 0 0 1-.745.664h-9a.75.75 0 0 1-.745-.664l-1.5-13zM11.008 17a1 1 0 0 1-1 1h-.01a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1m3 3a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleTea_02;
