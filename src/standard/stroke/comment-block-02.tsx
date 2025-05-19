import React from "react";
const CommentBlock_02: React.FC<
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
        d="M21.998 12v3.997a2 2 0 0 1-2 2H11.5l-3.912 2.845A1 1 0 0 1 6 20.033v-2.036H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.975 7.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95-4.95-4.95"
      />
    </svg>
  );
};
export default CommentBlock_02;
