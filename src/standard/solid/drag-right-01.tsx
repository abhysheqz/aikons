import React from "react";
const DragRight_01: React.FC<
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
        d="M7.747 6.501a2.251 2.251 0 1 1 4.502 0v4.27c2.982.178 4.728 1.396 5.636 2.34.69.72.869 1.673.869 2.484a5.4 5.4 0 0 1-.906 2.99l-1.095 1.642V22a.75.75 0 0 1-.75.75H8.497a.75.75 0 0 1-.75-.75v-1.71l-3.875-4.26a2.377 2.377 0 0 1 3.438-3.277l.437.437z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.754 5.5a4.25 4.25 0 1 1 6.44 3.642.75.75 0 0 1-.773-1.284 2.75 2.75 0 1 0-2.833 0 .75.75 0 1 1-.775 1.284A4.25 4.25 0 0 1 5.753 5.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.974 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-4.69a.75.75 0 0 1 0-1.5h4.69l-1.22-1.22a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragRight_01;
