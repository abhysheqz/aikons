import React from "react";
const Hexagon_01: React.FC<
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
        d="M11.15 1.615a1.75 1.75 0 0 1 1.7 0l8 4.444c.555.309.9.894.9 1.53v8.823a1.75 1.75 0 0 1-.9 1.53l-8 4.444a1.75 1.75 0 0 1-1.7 0l-8-4.444a1.75 1.75 0 0 1-.9-1.53V7.59c0-.636.345-1.221.9-1.53z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hexagon_01;
