import React from "react";
const Shapes: React.FC<
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
        d="M16 2a6 6 0 0 0 6 6v8a6 6 0 0 0-6 6H8a6 6 0 0 0-6-6V8a6 6 0 0 0 6-6z"
      />
    </svg>
  );
};
export default Shapes;
