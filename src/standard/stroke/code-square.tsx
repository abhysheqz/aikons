import React from "react";
const CodeSquare: React.FC<
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
        d="M21.5 18.5v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 8h-1a.5.5 0 0 0-.5.5v1.849a.5.5 0 0 1-.084.277L6 12l.916 1.374a.5.5 0 0 1 .084.277V15.5a.5.5 0 0 0 .5.5h1M15.5 8h1a.5.5 0 0 1 .5.5v1.849a.5.5 0 0 0 .084.277L18 12l-.916 1.374a.5.5 0 0 0-.084.277V15.5a.5.5 0 0 1-.5.5h-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 12h.009m3.982 0H14"
      />
    </svg>
  );
};
export default CodeSquare;
