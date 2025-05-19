import React from "react";
const MessageDownload_02: React.FC<
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
        d="M11.925 12.43h.008m3.96 0h.008m-7.944 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.902 6.967 2.979 2.98 2.98-2.98M18.88 2v7.354"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.877 2.992c-7.655.802-10.001 9.47-6.276 14.9l-1.583 3.899a.1.1 0 0 0 .127.131l4.359-1.575c2.069 1.507 8.018 1.62 10.792.096 1.796-1.09 4.554-2.71 4.554-8.277M9.877 2.992q.233-.013.47-.013m-.47.013 1.374-.005 2.822.005"
      />
    </svg>
  );
};
export default MessageDownload_02;
