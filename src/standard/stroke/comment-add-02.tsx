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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 5.5h7M18.499 2l.001 7M21.998 11.5v4.497a2 2 0 0 1-2 2H11.5l-3.912 2.845A1 1 0 0 1 6 20.033v-2.036H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5"
      />
    </svg>
  );
};
export default CommentAdd_02;
