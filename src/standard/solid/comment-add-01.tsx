import React from "react";
const CommentAdd_01: React.FC<
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
        d="M18.25 2a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5V10a1 1 0 1 1-2 0V7.5h-2.5a1 1 0 1 1 0-2h2.5V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 2.255h12.113A2.5 2.5 0 0 0 15.75 3v1h-1a2.5 2.5 0 0 0 0 5h1v1a2.5 2.5 0 0 0 5 0V9h1q.392-.002.748-.114v8.116a2.75 2.75 0 0 1-2.75 2.75h-8.255l-3.715 2.701C6.622 23.295 5 22.469 5 21.039v-1.286H3.75A2.75 2.75 0 0 1 1 17.002V5.005a2.75 2.75 0 0 1 2.75-2.75m16.932.162a2.76 2.76 0 0 1 1.653 1.652A2.5 2.5 0 0 0 21.75 4h-1V3q-.001-.301-.068-.583M7.75 8.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentAdd_01;
