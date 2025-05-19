import React from "react";
const Rhombus: React.FC<
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
        d="M9.956 3.15a2.75 2.75 0 0 1 4.088 0l6.309 7.01a2.75 2.75 0 0 1 0 3.68l-6.31 7.01a2.75 2.75 0 0 1-4.087 0l-6.31-7.01a2.75 2.75 0 0 1 0-3.68z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rhombus;
