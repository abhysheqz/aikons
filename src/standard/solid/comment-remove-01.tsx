import React from "react";
const CommentRemove_01: React.FC<
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
        d="M22.457 3.707a1 1 0 0 0-1.414-1.414L18.75 4.586l-2.292-2.292a1 1 0 1 0-1.414 1.414L17.335 6l-2.292 2.293a1 1 0 0 0 1.414 1.414l2.293-2.292 2.293 2.292a1 1 0 1 0 1.414-1.414L20.164 6zm.041 7.679V17a2.75 2.75 0 0 1-2.75 2.75h-8.255l-3.715 2.701C6.622 23.295 5 22.468 5 21.038v-1.286H3.75A2.75 2.75 0 0 1 1 17.001V5.004a2.75 2.75 0 0 1 2.75-2.75h9.615a2.5 2.5 0 0 0 .618 2.515L15.214 6l-1.232 1.232a2.5 2.5 0 0 0 3.536 3.536l1.232-1.232 1.233 1.232a2.5 2.5 0 0 0 2.515.618M7 9a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 7 9m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 7 14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentRemove_01;
