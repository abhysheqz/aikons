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
        fill="currentColor"
        fillRule="evenodd"
        d="M6 5H3v7.757h3zM3 3h3a2 2 0 0 1 2 2v7.757a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 3.755a.75.75 0 0 1 .75-.75h11.081a2.75 2.75 0 0 1 2.596 1.841l2.1 6a2.75 2.75 0 0 1-2.596 3.659h-4.527l.137.307a5.75 5.75 0 0 1-1.189 6.401l-.072.072a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 0 1-.22-.53z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThumbsDown;
