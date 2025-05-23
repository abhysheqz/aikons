import React from "react";
const StartUp_02: React.FC<
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
        d="M7 11.295c5.284-9.848 11.863-9.962 14.493-8.788 1.174 2.63 1.06 9.209-8.788 14.493-.102-.587-.67-2.125-2.125-3.58S7.587 11.397 7 11.295"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 16.8c2.043.933 2.26 2.607 2.544 4.2 0 0 4.278-2.952 1.542-7M7.2 10C6.267 7.957 4.593 7.739 3 7.456c0 0 2.952-4.278 7-1.542M6.209 14c-.632.632-1.706 2.464-.948 4.739 2.275.758 4.107-.316 4.739-.948"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.095 7.753a1.847 1.847 0 1 0-3.694 0 1.847 1.847 0 0 0 3.694 0Z"
      />
    </svg>
  );
};
export default StartUp_02;
