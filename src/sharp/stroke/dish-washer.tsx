import React from "react";
const DishWasher: React.FC<
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
        d="M21 3H3v18h18z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M3 9h18M6 6h4" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 6.009v-.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.009 18.757V15.5m0 0v-3.4c0-.061.054-.108.114-.097.425.076 1.222.288 1.727.8.176.179.257.424.3.671l.338 1.909a.1.1 0 0 1-.098.117z"
      />
    </svg>
  );
};
export default DishWasher;
