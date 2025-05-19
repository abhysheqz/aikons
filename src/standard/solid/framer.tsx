import React from "react";
const Framer: React.FC<
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
        d="M5.486 3.553a.76.76 0 0 1 .537-1.298H18a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.53-.22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 9A.75.75 0 0 1 6 8.25h6a.75.75 0 0 1 .53.22l5.983 5.983a.76.76 0 0 1-.537 1.297H12.75V21a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1-.22-.538V9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Framer;
