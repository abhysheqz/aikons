import React from "react";
const Chart_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 21h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1ZM11.5 21h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1ZM18.5 21h1a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.443 6.912l4.115 1.176m2.745-.333 4.395-2.51"
      />
    </svg>
  );
};
export default Chart_02;
