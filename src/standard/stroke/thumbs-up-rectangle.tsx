import React from "react";
const ThumbsUpRectangle: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 19.5v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.113 17.5H8a1 1 0 0 1-1-1v-4.65a1 1 0 0 1 .22-.624L11 6.5l.114.085a3 3 0 0 1 .957 3.582L11.5 11.5h4.071a1 1 0 0 1 .94 1.342l-1.459 4a1 1 0 0 1-.94.658Z"
      />
    </svg>
  );
};
export default ThumbsUpRectangle;
