import React from "react";
const Notion_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm8.089 4.285a.75.75 0 0 0-.589-.285H7v1.5h.679v8.5H7v1.5h3v-1.5h-.821v-3.936l3.714 5.126a.75.75 0 0 0 .607.31h2.821v-10H17v-1.5h-3v1.5h.821v3.517z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notion_01;
