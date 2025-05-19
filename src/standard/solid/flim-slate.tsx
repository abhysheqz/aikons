import React from "react";
const FlimSlate: React.FC<
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
        d="M16.572 1.327a3 3 0 0 1 3.663 2.032l.94 3.132a1 1 0 0 1-.722 1.26l-16.502 4a1 1 0 0 1-1.185-.656L1.936 8.6a3 3 0 0 1 2.057-3.842zm1.748 2.607a1 1 0 0 0-1.221-.677l-12.58 3.43a1 1 0 0 0-.686 1.281l.54 1.622 14.583-3.535z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m9.702 4.457-1 5.5L6.734 9.6l1-5.5zM15.702 2.957l-1 5.5-1.968-.357 1-5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.719 9.78a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-9a1 1 0 0 0-1-1zm4 7a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlimSlate;
