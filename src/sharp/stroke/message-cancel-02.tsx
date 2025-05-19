import React from "react";
const MessageCancel_02: React.FC<
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
        d="m15.91 2 5.962 6M15.91 8l5.962-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.93 12.5h.01m3.961 0h.009m-7.95 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.806 3.016c-6.74.207-10.278 9.026-6.196 15.019L2.156 21.8a.1.1 0 0 0 .125.131l4.174-1.379c1.613 1.37 8.36 1.577 10.649 0 2.564-1.321 5.25-4.16 4.519-9.594M9.806 3.016q.24-.014.486-.014m-.486.014 1.42-.005 1.31-.01"
      />
    </svg>
  );
};
export default MessageCancel_02;
