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
        fill="currentColor"
        fillRule="evenodd"
        d="M18.255 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-2.7 4.5c0-.417.095-.812.264-1.164l3.6 3.6A2.7 2.7 0 0 1 15.555 6.5m5.137 1.164-3.6-3.6a2.7 2.7 0 0 1 3.6 3.6m-6.676-5.423-.01.01a6 6 0 1 0 8.485 8.485l.007-.007v6.26a2.75 2.75 0 0 1-2.75 2.75h-8.255l-3.715 2.7C6.622 23.282 5 22.456 5 21.025v-1.286H3.75A2.75 2.75 0 0 1 1 16.988V4.991a2.75 2.75 0 0 1 2.75-2.75zM6.999 8.993a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentBlock_01;
