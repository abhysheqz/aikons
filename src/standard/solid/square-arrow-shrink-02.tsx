import React from "react";
const SquareArrowShrink_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm13.03 5.78a.75.75 0 0 0-1.06-1.06l-2.72 2.72V8a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 0-1.5h-1.19zM8 12.25a.75.75 0 0 0 0 1.5h1.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72V16a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowShrink_02;
