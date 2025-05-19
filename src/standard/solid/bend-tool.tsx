import React from "react";
const BendTool: React.FC<
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
        d="M16 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 4.75c-6.302 0-11 5.394-11 13h-2c0-8.394 5.302-15 13-15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BendTool;
