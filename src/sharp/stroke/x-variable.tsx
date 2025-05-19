import React from "react";
const XVariable: React.FC<
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
        d="M20 3.5c-6.367 0-9.633 17-16 17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 20.5c-1.618 0-2.426 0-3.108-.342a3.5 3.5 0 0 1-1.04-.8c-.53-.591-.82-1.438-1.401-3.13l-2.902-8.456c-.58-1.692-.87-2.539-1.4-3.13a3.5 3.5 0 0 0-1.04-.8C7.425 3.5 6.617 3.5 5 3.5"
      />
    </svg>
  );
};
export default XVariable;
