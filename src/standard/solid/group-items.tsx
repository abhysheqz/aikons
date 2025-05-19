import React from "react";
const GroupItems: React.FC<
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
        d="M1 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 2.75h12v2h-12zm-3 15v-12h2v12zm16 0v-12h2v12zm-13 1h12v2h-12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 7.25a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM7 13.25a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default GroupItems;
