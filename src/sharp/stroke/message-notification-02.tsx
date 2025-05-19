import React from "react";
const MessageNotification_02: React.FC<
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
        d="M11.907 12.473h.009m3.951 0h.01m-7.93 0h.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.824 5.491c0 1.928-1.553 3.49-3.47 3.49-1.915 0-3.469-1.562-3.469-3.49S16.44 2 18.355 2s3.47 1.563 3.47 3.491Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.819 3.013c-7.255.6-10.104 9.261-6.192 14.936l-1.614 3.915a.1.1 0 0 0 .126.132l4.263-1.57c1.792 1.322 8.545 1.65 10.837.078 2.554-1.457 5.036-3.764 4.577-9.595M9.819 3.013q.24-.014.487-.014m-.487.014h2.85"
      />
    </svg>
  );
};
export default MessageNotification_02;
