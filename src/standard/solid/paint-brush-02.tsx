import React from "react";
const PaintBrush_02: React.FC<
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
        d="M3 3.75A2.75 2.75 0 0 1 5.75 1h9a2.75 2.75 0 0 1 2.75 2.75v2a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 3 5.75zM11 16.75c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 11 20.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 5.5H17a.75.75 0 1 1 0-1.5h.752a2.75 2.75 0 0 1 2.75 2.75v2.523a2.75 2.75 0 0 1-1.942 2.628l-3.677 1.131A1.25 1.25 0 0 0 14 14.227v1.523a.75.75 0 0 1-1.5 0v-1.523a2.75 2.75 0 0 1 1.941-2.628l3.677-1.132a1.25 1.25 0 0 0 .883-1.194V6.75c0-.69-.56-1.25-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaintBrush_02;
