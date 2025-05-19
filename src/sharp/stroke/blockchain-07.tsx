import React from "react";
const Blockchain_07: React.FC<
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
        d="M5.5 6.5 2.18 4.602M5.5 6.5l3.32-1.898M5.5 6.5v3.763m0-7.763 3.5 2v4l-3.5 2-3.5-2v-4zM18.5 6.5l-3.286-1.878M18.5 6.5l3.286-1.878M18.5 6.5v3.77m0-7.77 3.5 2v4l-3.5 2-3.5-2v-4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11.5 6.5h1M2 12.5v7h3.5M22 12.5v7h-3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.25 16.931v-1.717c0-.947.783-1.714 1.75-1.714.966 0 1.75.768 1.75 1.714v1.717M8.5 16.93h7V21.5h-7z"
      />
    </svg>
  );
};
export default Blockchain_07;
