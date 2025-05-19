import React from "react";
const CommentAdd_02: React.FC<
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
        d="M13.999 6h8m-4-4v8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.989 2H2.001V17.96h4.002v4.03c0 .009.01.014.016.008l4.995-4.038H22v-5.991"
      />
    </svg>
  );
};
export default CommentAdd_02;
