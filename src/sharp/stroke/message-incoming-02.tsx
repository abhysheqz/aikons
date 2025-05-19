import React from "react";
const MessageIncoming_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.883 12.39h.008m3.943 0h.009m-7.912 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.776 4.969h-7.294M16.832 2l-2.967 2.969 2.967 2.969"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.689 2.974C2.207 3.93-.17 12.2 3.602 17.806l-1.595 3.981a.1.1 0 0 0 .127.132l4.326-1.58c2.452 1.345 7.577 1.533 10.553.173 1.918-1.135 5.497-3.054 4.71-9.906l-.35-1.658M9.69 2.974a8 8 0 0 1 .46-.013m-.46.013 1.48-.013"
      />
    </svg>
  );
};
export default MessageIncoming_02;
