import React from "react";
const InstallingUpdates_01: React.FC<
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
        strokeWidth={1.5}
        d="M14.5 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 18.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.072 2.684 9.45 4.55l-1.326.839-2.061-.51a1 1 0 0 0-1.1.46L3.924 7.085a1 1 0 0 0 .199 1.262L5.55 9.605v1.79l-1.428 1.257a1 1 0 0 0-.198 1.261l1.039 1.749a1 1 0 0 0 1.1.46l2.06-.51 1.257.704.568 1.962a1 1 0 0 0 .96.722h2.182a1 1 0 0 0 .96-.722l.569-1.962 1.255-.705 2.061.51a1 1 0 0 0 1.1-.46l1.065-1.79a1 1 0 0 0-.154-1.22l-1.452-1.447V9.796l1.453-1.446a1 1 0 0 0 .154-1.22l-1.065-1.792a1 1 0 0 0-1.1-.46l-2.061.51-1.326-.838-.622-1.866A1 1 0 0 0 12.979 2h-1.958a1 1 0 0 0-.949.684"
      />
    </svg>
  );
};
export default InstallingUpdates_01;
