import React from "react";
const Slack: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 9.25v-5.5a1.75 1.75 0 1 1 3.5 0v5.5a1.75 1.75 0 1 1-3.5 0M7.5 20.25v-5.5a1.75 1.75 0 1 1 3.5 0v5.5a1.75 1.75 0 1 1-3.5 0M14.75 13h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 1 1 0-3.5M3.75 7.5h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 1 1 0-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 3.75c0 .966.784 1.75 1.75 1.75h1.75V3.75a1.75 1.75 0 1 0-3.5 0ZM17 20.25a1.75 1.75 0 0 0-1.75-1.75H13.5v1.75a1.75 1.75 0 1 0 3.5 0ZM20.25 7a1.75 1.75 0 0 0-1.75 1.75v1.75h1.75a1.75 1.75 0 1 0 0-3.5ZM3.75 17a1.75 1.75 0 0 0 1.75-1.75V13.5H3.75a1.75 1.75 0 1 0 0 3.5Z"
      />
    </svg>
  );
};
export default Slack;
