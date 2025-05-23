import React from "react";
const ThreadsEllipse: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9.791c-1.088-4.044-4.828-3.79-4.828-3.79S7 6 7 11.996s5.172 5.997 5.172 5.997 3.074.204 4.483-2.7c.46-1.28.345-3.639-4.138-3.639 0 0-2.07 0-2.07 1.724 0 .673.69 1.378 1.725 1.378a2.45 2.45 0 0 0 2.414-2.067c.69-4.136-3.104-4.481-4.138-2.758"
      />
    </svg>
  );
};
export default ThreadsEllipse;
