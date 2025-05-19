import React from "react";
const MessageDownload_01: React.FC<
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
        d="M7.455 14.93h9.92m-9.92-4.973h5.952"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.888 6.973 2.976 2.984 2.976-2.984M18.864 2v7.388"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.933 2.999c-7.587.735-10.17 9.447-6.322 14.912l-1.588 3.881a.1.1 0 0 0 .126.132l4.265-1.502c2.568 1.43 8.616 1.54 10.852.027 1.984-1.099 4.862-2.94 4.554-9.007M9.933 2.999q.234-.014.474-.014M9.933 3l1.383-.005H13.9"
      />
    </svg>
  );
};
export default MessageDownload_01;
