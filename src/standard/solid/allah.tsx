import React from "react";
const Allah: React.FC<
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
        d="M13.12 1.956a1.75 1.75 0 0 0-2.241 0L8.728 3.75H5.499A1.75 1.75 0 0 0 3.75 5.5v3.229l-1.793 2.15a1.75 1.75 0 0 0 0 2.241l1.793 2.152v3.228c0 .967.784 1.75 1.75 1.75h3.229l2.15 1.793a1.75 1.75 0 0 0 2.241 0l2.152-1.793h3.228a1.75 1.75 0 0 0 1.75-1.75v-3.228l1.793-2.152a1.75 1.75 0 0 0 0-2.24l-1.793-2.151V5.499a1.75 1.75 0 0 0-1.75-1.75h-3.228zM12.25 8a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 0-.75-.75 3.25 3.25 0 0 0-3.25 3.25v.5a.75.75 0 0 0 1.5 0v-.5c0-.698.409-1.3 1-1.582V14.5a2.25 2.25 0 0 0 3.75 1.677 2.25 2.25 0 0 0 3.75-1.677V10a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 1-1.5 0zm5.5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Allah;
