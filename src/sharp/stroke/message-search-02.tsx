import React from "react";
const MessageSearch_02: React.FC<
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
        d="M11.934 12.506h.009m3.962 0h.01m-7.952 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.907 8.027 1.971 1.978m-.941-4.477C20.937 3.58 19.367 2 17.432 2c-1.936 0-3.505 1.58-3.505 3.529s1.569 3.528 3.505 3.528 3.505-1.58 3.505-3.528Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.708 3.012c-7.778.912-9.647 9.972-6.082 15.01l-1.551 3.74c-.033.08-.08.266 0 .236l4.377-1.506c2.227 1.512 8.392 1.56 10.881.121 2.289-1.323 4.553-3.373 4.553-8.33M9.708 3.012q.239-.014.481-.014m-.48.014 2.226-.014"
      />
    </svg>
  );
};
export default MessageSearch_02;
