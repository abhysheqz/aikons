import React from "react";
const MessageFavourite_01: React.FC<
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
        d="M7.465 14.922h8.943m-8.943-4.97h5.465"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.625 2.288c-1.587-.828-2.726.392-2.726.392s-1.14-1.22-2.726-.392c-1.922 1.002-2.06 4.928 2.726 6.67 4.785-1.742 4.647-5.668 2.726-6.67Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.871 2.989c-7.56.612-10.027 9.535-6.229 14.96l-1.61 3.84a.1.1 0 0 0 .126.133l4.273-1.516c2.456 1.366 7.974 1.603 10.822.112 1.984-1.226 5-3.095 4.592-9.713M9.87 2.99q.233-.013.47-.013m-.47.013 1.404-.013"
      />
    </svg>
  );
};
export default MessageFavourite_01;
