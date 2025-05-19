import React from "react";
const Thread: React.FC<
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
        d="M15.5 5.25a2.75 2.75 0 0 0 2.75-2.75.75.75 0 0 0-.75-.75h-14a.75.75 0 0 0-.75.75A2.75 2.75 0 0 0 5.5 5.25zM3.75 7.5a.75.75 0 0 1 .75-.75h14a2.75 2.75 0 0 1 2.75 2.75v3a.75.75 0 0 1-1.5 0v-3c0-.69-.56-1.25-1.25-1.25h-14a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75m-1 5a2.75 2.75 0 0 1 2.75-2.75h10a2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Thread;
