import React from "react";
const MessageUpload_01: React.FC<
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
        d="M14.14 2.272a9.3 9.3 0 0 1 1.806.306l-2.378 2.379 3.225 3.14v3.817h4.5l.043-3.775.548-.549a9.2 9.2 0 0 1 .843 3.27c.023.32.023.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.587 8.588c-.32.022-.692.022-1.351.022h-1.58c-.658 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.422-.917L1.474 22.75l1.305-4.655a9.2 9.2 0 0 1-1.507-4.454c-.023-.32-.023-.692-.023-1.351v-.08c0-.659 0-1.03.023-1.35a9.25 9.25 0 0 1 8.587-8.588c.32-.022.692-.022 1.35-.022h1.58c.66 0 1.03 0 1.351.022M7.5 14.25h9v1.5h-9zm0-5H13v1.5H7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 1.25 3.707 3.707-1.414 1.414-1.293-1.293v5.586h-2V5.078L16.75 6.371l-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageUpload_01;
