import React from "react";
const HierarchySquare_07: React.FC<
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
        d="M21 22a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zM7 22a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zM19 17v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1"
      />
      <path
        fill="currentColor"
        d="M15 10.5v.75a.75.75 0 0 0 .75-.75zm-6 0h-.75c0 .414.336.75.75.75zm6-.75H9v1.5h6zm-5.25.75c0-1.294.997-2.25 2.25-2.25v-1.5c-2.062 0-3.75 1.608-3.75 3.75zM12 8.25c1.252 0 2.25.956 2.25 2.25h1.5c0-2.143-1.69-3.75-3.75-3.75zm.75-4.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 12 5.75zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 9.75 3.5zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 12 1.25z"
      />
    </svg>
  );
};
export default HierarchySquare_07;
