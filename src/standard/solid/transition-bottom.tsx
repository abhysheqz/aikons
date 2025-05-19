import React from "react";
const TransitionBottom: React.FC<
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
        d="M2 17a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm.25-12A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v3A2.75 2.75 0 0 1 19 10.75h-6v3.549h2.61c.291 0 .61.126.637.417a.75.75 0 0 1-.259.64l-3.213 2.754q-.114.14-.27.232l-.017.014a.75.75 0 0 1-.976 0l-.017-.014a1 1 0 0 1-.27-.232l-3.213-2.754a.75.75 0 0 1-.259-.64c.028-.291.346-.417.638-.417H11V10.75H5A2.75 2.75 0 0 1 2.25 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransitionBottom;
