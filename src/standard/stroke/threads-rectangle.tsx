import React from "react";
const ThreadsRectangle: React.FC<
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
        d="M2.5 4.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9.795c-1.088-4.044-4.828-3.792-4.828-3.792S7 6.003 7 12s5.172 5.997 5.172 5.997 3.074.204 4.483-2.7c.46-1.28.345-3.638-4.138-3.638 0 0-2.07 0-2.07 1.723 0 .673.69 1.378 1.725 1.378a2.446 2.446 0 0 0 2.414-2.067c.69-4.136-3.104-4.48-4.138-2.758"
      />
    </svg>
  );
};
export default ThreadsRectangle;
