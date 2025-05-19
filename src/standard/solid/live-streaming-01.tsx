import React from "react";
const LiveStreaming_01: React.FC<
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
        d="M12 4.25c-1.255 0-2.408.607-3.218 1.623a1 1 0 1 1-1.564-1.246C8.363 3.19 10.069 2.25 12 2.25s3.637.94 4.782 2.377a1 1 0 0 1-1.564 1.246C14.408 4.857 13.255 4.25 12 4.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8.25c-.458 0-.897.22-1.218.623a1 1 0 1 1-1.564-1.246C9.874 6.803 10.866 6.25 12 6.25s2.126.553 2.782 1.377a1 1 0 0 1-1.564 1.246c-.32-.403-.76-.623-1.218-.623M4 10.25A2.75 2.75 0 0 0 1.25 13v6A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19v-6A2.75 2.75 0 0 0 20 10.25zm8.202 3.487a.75.75 0 1 0-1.404.526l1.5 4a.75.75 0 0 0 1.404 0l1.5-4a.75.75 0 1 0-1.404-.526L13 15.864zM5.75 14a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-.75zm4 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5h-1.25v-.5h.75a.75.75 0 0 0 0-1.5h-.75v-.5H19a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LiveStreaming_01;
