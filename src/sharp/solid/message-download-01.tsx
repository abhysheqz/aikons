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
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 12.432 3.379-3.379q.24.873.306 1.806c.022.32.022.692.022 1.351v.08c0 .658 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.692.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.455c-.022-.32-.022-.692-.022-1.35v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.271c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022.93.064 1.82.265 2.653.582v.964l-3.225 3.139zM7.5 14.25h9v1.5h-9zm0-5H13v1.5H7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 10.664 3.707-3.707-1.414-1.414-1.293 1.293V1.25h-2v5.586L16.75 5.543l-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageDownload_01;
