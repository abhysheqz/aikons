import React from "react";
const MessageIncoming_01: React.FC<
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
        d="M7.433 14.932h8.894M7.432 9.96h5.435"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.761 4.984h-7.198M16.821 2l-2.965 2.984 2.965 2.985"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.776 2.984c-7.459.714-9.937 9.4-6.16 14.938l-1.619 3.87a.1.1 0 0 0 .124.133l4.374-1.476c2.379 1.347 7.73 1.547 10.604.15 1.961-1.22 5.136-3.144 4.732-9.728V8.975M9.776 2.985q.23-.014.465-.014m-.465.013 1.387-.013"
      />
    </svg>
  );
};
export default MessageIncoming_01;
