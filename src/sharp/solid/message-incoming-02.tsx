import React from "react";
const MessageIncoming_02: React.FC<
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
        d="m14.14 2.272.105.008-2.677 2.677 5.475 5.475 3.14-3.225h1.512a9.2 9.2 0 0 1 1.033 3.653c.022.32.022.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.692.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022M9.01 11.5h-2.01v2h2.01zm3.995 0h-2.008v2h2.008zm3.996 0H14.99v2H17z"
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
export default MessageIncoming_02;
