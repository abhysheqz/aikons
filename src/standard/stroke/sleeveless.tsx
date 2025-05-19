import React from "react";
const Sleeveless: React.FC<
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
        strokeWidth={1.5}
        d="M15 2a4.95 4.95 0 0 1-2.99 1.003A5 5 0 0 1 9 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9c-1-.5-2.5-2-2.5-6L15 2c0 3-1 5.407-3 5.407S9 5 9 2L6.5 3C6.5 7 5 8.5 4 9Z"
      />
    </svg>
  );
};
export default Sleeveless;
