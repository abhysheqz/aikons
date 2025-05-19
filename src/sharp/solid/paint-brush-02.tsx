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
        d="M3.25 2A.75.75 0 0 1 4 1.25h13a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H4A.75.75 0 0 1 3.25 8zM11.25 15.25h4.5v7.5h-4.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 5.75H17.25v-1.5H20a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.53.717l-5.971 1.837V16h-1.5v-3c0-.33.215-.62.53-.717l5.97-1.837z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaintBrush_02;
