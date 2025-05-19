import React from "react";
const Notification_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.472 3.5c0 .829.673 1.5 1.504 1.5.83 0 1.504-.671 1.504-1.5 0-.828-.674-1.5-1.504-1.5s-1.504.672-1.504 1.5ZM14.984 19c0 1.657-1.347 3-3.008 3a3.004 3.004 0 0 1-3.009-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.003 19h17.995v-2.56l-2.17-2.474v-2.561c0-3.18-2.973-6.405-6.815-6.405S5.12 8.38 5.12 11.373v2.566l-2.118 2.58z"
      />
    </svg>
  );
};
export default Notification_01;
