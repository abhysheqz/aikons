import React from "react";
const SquareArrowShrink_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm1.97 4.72a.75.75 0 0 1 1.06 0l2.72 2.72V8a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h1.19L6.47 7.53a.75.75 0 0 1 0-1.06M12.25 13a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-1.19l2.72 2.72a.75.75 0 1 1-1.06 1.06l-2.72-2.72V16a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowShrink_01;
