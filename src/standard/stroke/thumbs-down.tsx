import React from "react";
const ThumbsDown: React.FC<
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
        d="M7 3.5H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.948 3.5H7v10l6.916 7 .07-.072a5.045 5.045 0 0 0 1.022-5.566L14.41 13.5h5.612c1.362 0 2.315-1.36 1.865-2.66l-2.074-6a1.98 1.98 0 0 0-1.865-1.34Z"
      />
    </svg>
  );
};
export default ThumbsDown;
