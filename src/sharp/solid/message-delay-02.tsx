import React from "react";
const MessageDelay_02: React.FC<
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
        d="M12 6c0-1.419.492-2.722 1.316-3.75H11.21c-.659 0-1.03 0-1.35.022a9.25 9.25 0 0 0-8.588 8.588c-.022.32-.022.691-.022 1.35v.08c0 .659 0 1.03.022 1.35a9.2 9.2 0 0 0 1.507 4.455L1.475 22.75l4.962-1.439a9.2 9.2 0 0 0 3.422.917c.32.022.692.022 1.351.022h1.58c.659 0 1.03 0 1.35-.022a9.25 9.25 0 0 0 8.588-8.588c.022-.32.022-.691.022-1.35v-.08c0-.659 0-1.03-.022-1.35a9 9 0 0 0-.126-1.01A6 6 0 0 1 12 6m-2.991 5.5H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.03 5.78 2-2-1.061-1.06-2 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageDelay_02;
