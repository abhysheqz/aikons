import React from "react";
const CommentBlock_01: React.FC<
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
        d="M8 12.5h6m-6-5h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m15.2 3.2 5.6 5.6M22 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.989 2H2V17.96h4.003v4.03c0 .009.01.014.016.008l4.995-4.038h10.985v-5.991"
      />
    </svg>
  );
};
export default CommentBlock_01;
