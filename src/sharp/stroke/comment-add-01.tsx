import React from "react";
const CommentAdd_01: React.FC<
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
        d="M14 6h8m-4-4v8M8 12.5h6m-6-5h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.013 2.001H2v15.958h4.003v4.031c0 .008.01.013.016.008l4.995-4.039h10.985v-6.954"
      />
    </svg>
  );
};
export default CommentAdd_01;
