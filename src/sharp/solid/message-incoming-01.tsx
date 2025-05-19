import React from "react";
const MessageIncoming_01: React.FC<
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
        d="m14.14 2.272.105.008-2.677 2.677 5.475 5.475 3.182-3.182 1.47-.043a9.2 9.2 0 0 1 1.033 3.653c.022.32.022.692.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.692.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917l-4.962 1.44 1.304-4.655a9.2 9.2 0 0 1-1.507-4.455c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022M7.5 14.25h9v1.5h-9zm0-5H13v1.5H7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.164 5.957 1.293 1.293-1.414 1.414-3.707-3.707 3.707-3.707 1.414 1.414-1.293 1.293h5.586v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageIncoming_01;
