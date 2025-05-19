import React from "react";
const Touch_05: React.FC<
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
        d="M8.496 13.5v-10a1.5 1.5 0 0 1 2.998 0v7a.375.375 0 0 0 .75 0V8.875h.625c.898 0 1.625.727 1.625 1.625v1a.375.375 0 1 0 .75 0v-1q-.001-.325-.083-.625h.708c.898 0 1.625.727 1.625 1.625v1a.375.375 0 1 0 .75 0v-1c0-.357-.078-.696-.22-1h.472a2 2 0 0 1 2 2v4.097a4 4 0 0 1-.877 2.499l-1.123 1.664v.99a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-.99l-4.61-6.924a1.74 1.74 0 0 1-.01-2.183 1.736 1.736 0 0 1 2.488-.234z"
      />
    </svg>
  );
};
export default Touch_05;
