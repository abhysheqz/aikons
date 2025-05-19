import React from "react";
const MessageAdd_02: React.FC<
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
        d="M18.25 3.75v-2.5h2v2.5h2.5v2h-2.5v2.5h-2v-2.5h-2.5v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.79 2.25c.659 0 1.03 0 1.35.022q.18.014.36.032V7H17v2.5h4.5V7h.083a9.2 9.2 0 0 1 1.145 3.86c.022.32.022.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022zM9.009 11.5H7v2h2.009zm3.996 0h-2.01v2h2.01zm3.995 0h-2.009v2H17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageAdd_02;
