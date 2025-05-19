import React from "react";
const Fahrenheit: React.FC<
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
        d="M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M21 3H11v18h2v-8h6v-2h-6V5h8z" />
    </svg>
  );
};
export default Fahrenheit;
